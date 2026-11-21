const task = await taskSpace(13);
const page = task.page("p1");
await page.waitForSelector(".hero-metrics-grid", { state: "visible", timeout: 20000 });
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
    scroll: box(".hero-scroll-wrap"),
    metrics: box(".hero-metrics-container"),
  };
});
const screenshot = await page.screenshot({ path: "C:/xampp/htdocs/banphaohoa/.tmp-hero-rhythm-webpack.png" });
console.log({ geometry, screenshot });
