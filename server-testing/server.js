const puppeteer = require("puppeteer");

const scrape = async (url) => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    console.log("found url");
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
scrape("https://web.whatsapp.com/");
