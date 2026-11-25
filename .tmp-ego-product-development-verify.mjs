const task = await taskSpace(15);
const page = task.page("p1");
await page.goto("http://127.0.0.1:3000/san-pham/gian-phun-vien-100-vip", { timeout: 60000 });
await page.waitForSelector(".product-detail", { state: "visible", timeout: 30000 });
await page.waitForTimeout(1200);
console.log({ title: await page.title(), url: await page.url() });
console.log(await page.snapshot());
