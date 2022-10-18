const puppeteer = require("puppeteer");

const scrape = async (url) => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector("span [title='+92 321 8867019']");
    const target = await page.$("span [title='+92 321 8867019']");
    console.log("found span");
    await target.click();
    console.log("target tk");
    const inp = await page.$(
      "#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div.fd365im1.to2l77zo.bbv8nyr4.mwp4sxku.gfz4du6o.ag5g9lrv > p"
    );
    await inp.type("Testing magic");
    await page.keyboard.press("Enter");
  } catch (error) {
    console.log("error");
  }
};
scrape("https://web.whatsapp.com/");
