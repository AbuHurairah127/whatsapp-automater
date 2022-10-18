const puppeteer = require("puppeteer");

const scrape = async (url) => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    console.log("🚀 ~ file: server.js ~ line 5 ~ scrape ~ browser", browser);
    const page = await browser.newPage();
    console.log("🚀 ~ file: server.js ~ line 7 ~ scrape ~ page", page);
    await page.goto(url);
    console.log("Abc");
  } catch (error) {
    console.log("error");
  }
};
scrape("https://www.google.com/");
