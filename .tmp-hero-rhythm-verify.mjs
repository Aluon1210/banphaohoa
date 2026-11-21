const task = await taskSpace("Verify hero text rhythm");
const page = task.page("p1");
await page.cdp("Network.enable");
await page.cdp("Network.setCacheDisabled", { cacheDisabled: true });
await page.cdp("Emulation.setDeviceMetricsOverride", {
  width: 1800,
  height: 863,
  deviceScaleFactor: 1,
  mobile: false,
});
await page.goto("http://localhost:3000/?hero-rhythm=verify");
await page.waitForSelector(".hero-metrics-grid", { state: "visible", timeout: 15000 });
await page.evaluate(() => window.scrollTo({ left: 0, top: 0 }));
await page.waitForTimeout(2600);
const geometry = await page.evaluate(() => {
  const box = (selector) => {
    const rect = document.querySelector(selector)?.getBoundingClientRect();
    return rect && { top: rect.top, bottom: rect.bottom };
  };
  return {
    styles: {
      copyTransform: getComputedStyle(document.querySelector(".hero-copy")).transform,
      spanMarginBottom: getComputedStyle(document.querySelector(".hero-copy h1 span")).marginBottom,
      badgeMarginTop: getComputedStyle(document.querySelector(".hero-badge")).marginTop,
      mottoMarginTop: getComputedStyle(document.querySelector(".hero-motto-wrap")).marginTop,
      introMarginTop: getComputedStyle(document.querySelector(".hero-intro")).marginTop,
      actionMarginTop: getComputedStyle(document.querySelector(".hero-actions")).marginTop,
      scrollMarginTop: getComputedStyle(document.querySelector(".hero-scroll-wrap")).marginTop,
    },
    heading: box(".hero-copy h1"),
    badge: box(".hero-badge"),
    motto: box(".hero-motto-wrap"),
    intro: box(".hero-intro"),
    actions: box(".hero-actions"),
    scroll: box(".hero-scroll-wrap"),
    metrics: box(".hero-metrics-container"),
  };
});
const screenshot = await page.screenshot({ path: "C:/xampp/htdocs/banphaohoa/.tmp-hero-rhythm-verify.png" });
console.log({ taskSpaceId: task.spaceId, geometry, screenshot });
