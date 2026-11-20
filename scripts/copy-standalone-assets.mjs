import { cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();

try {
  await mkdir(resolve(root, ".next/standalone/.next"), { recursive: true });
  await Promise.all([
    cp(resolve(root, "public"), resolve(root, ".next/standalone/public"), {
      recursive: true,
      force: true,
    }),
    cp(resolve(root, ".next/static"), resolve(root, ".next/standalone/.next/static"), {
      recursive: true,
      force: true,
    }),
  ]);
  console.log("Successfully copied public and .next/static into .next/standalone.");
} catch (err) {
  console.error("Asset copy warning (non-fatal):", err.message);
}
