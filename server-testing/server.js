const puppeteer = require("puppeteer");

const scrape = async (url) => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    console.log("found url");
    await page.setViewport({
      width: 1200,
      height: 800,
    });
    // await page.waitForSelector("div [id='pane-side']");
    // const sidePane = await page.$("div [id='pane-side']");
    await autoScroll(page);
    setTimeout(async () => {
      await page.waitForSelector("span [title='Çhámbër öf Şečrets 😉🙂']");
      const target = await page.$("span [title='Çhámbër öf Şečrets 😉🙂']");

      console.log("found target");
      await target.click();
      console.log("target clicked");
      const inp = await page.$(
        "#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div.fd365im1.to2l77zo.bbv8nyr4.mwp4sxku.gfz4du6o.ag5g9lrv > p"
      );
      await inp.type("Testing for three word and two spaced word saved number");
      // await page.keyboard.press("Enter");
      console.log("message sent");
    }, 10000);
  } catch (error) {
    console.log("error", error);
  }
};
scrape("https://www.youtube.com/");
// const browser = await puppeteer.launch({
//   headless: false
// });
// const page = await browser.newPage();
// await page.goto('https://www.yoursite.com');
// await page.setViewport({
//   width: 1200,
//   height: 800
// });

// await autoScroll(page);

// await page.screenshot({
//   path: 'yoursite.png',
//   fullPage: true
// });

// await browser.close();
// })();

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}
