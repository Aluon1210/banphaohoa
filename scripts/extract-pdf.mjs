import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import { deflateSync } from "node:zlib";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const body = Buffer.concat([Buffer.from(type), data]);
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function toPng(width, height, rgb) {
  const stride = width * 3;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    const row = y * (stride + 1);
    raw[row] = 0;
    rgb.copy(raw, row + 1, y * stride, y * stride + stride);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 2;
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 6 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function downsample(src, sw, sh, channels, maxW) {
  const scale = Math.min(1, maxW / sw);
  const dw = Math.max(1, Math.round(sw * scale));
  const dh = Math.max(1, Math.round(sh * scale));
  const out = Buffer.alloc(dw * dh * 3);
  for (let y = 0; y < dh; y++) {
    const sy = Math.min(sh - 1, Math.floor((y * sh) / dh));
    for (let x = 0; x < dw; x++) {
      const sx = Math.min(sw - 1, Math.floor((x * sw) / dw));
      const si = (sy * sw + sx) * channels;
      const di = (y * dw + x) * 3;
      out[di] = src[si];
      out[di + 1] = src[si + 1] ?? src[si];
      out[di + 2] = src[si + 2] ?? src[si];
    }
  }
  return { rgb: out, width: dw, height: dh };
}

function resolveObj(store, name) {
  return new Promise((resolve) => {
    let settled = false;
    const done = (value) => {
      if (settled) return;
      settled = true;
      resolve(value ?? null);
    };
    try {
      store.get(name, done);
    } catch {
      done(null);
    }
    setTimeout(() => done(null), 1500);
  });
}

const pdfPath = path.resolve("app/HSNL - SALAGARDEN.pdf");
const outDir = path.resolve("public/images");
await mkdir(outDir, { recursive: true });
const data = new Uint8Array(await readFile(pdfPath));
const doc = await getDocument({
  data,
  disableWorker: true,
  isEvalSupported: false,
  useSystemFonts: true,
}).promise;

const manifest = [];
for (let i = 1; i <= doc.numPages; i++) {
  const page = await doc.getPage(i);
  const ops = await page.getOperatorList();
  let img = 0;
  const seen = new Set();
  for (let k = 0; k < ops.fnArray.length; k++) {
    const fn = ops.fnArray[k];
    if (fn !== 85 && fn !== 86) continue;
    const name = ops.argsArray[k][0];
    if (typeof name !== "string" || seen.has(name)) continue;
    seen.add(name);
    const obj =
      (await resolveObj(page.objs, name)) ||
      (await resolveObj(page.commonObjs, name));
    if (!obj?.data || !obj.width || !obj.height) {
      manifest.push({ page: i, name, status: "missing" });
      continue;
    }
    const channels = obj.kind === 3 ? 4 : obj.kind === 1 ? 1 : 3;
    img += 1;
    const sampled = downsample(obj.data, obj.width, obj.height, channels, 1400);
    const file = `pdf-p${i}-${img}.png`;
    await writeFile(path.join(outDir, file), toPng(sampled.width, sampled.height, sampled.rgb));
    manifest.push({
      page: i,
      file,
      from: `${obj.width}x${obj.height}`,
      to: `${sampled.width}x${sampled.height}`,
    });
    console.log("saved", file);
  }
}
await writeFile(path.resolve("scripts/pdf-extract/images.json"), JSON.stringify(manifest, null, 2));
console.log("done", manifest.length);
