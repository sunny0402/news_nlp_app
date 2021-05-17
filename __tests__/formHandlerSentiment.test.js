import { handleSubmit } from "../src/client/js/formHandler";
import puppeteer from "puppeteer";

describe("Testing form submission", () => {
  it("text entered in input fields and submitted", async () => {
    jest.setTimeout(25000);
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 40,
    });
    const page = await browser.newPage();
    await page.goto("http://localhost:8080/webpack-dev-server/", {
      waitUntil: "networkidle2",
    });
    const find_frame = await page.waitForSelector("iframe");
    const my_frame = await find_frame.contentFrame();

    await my_frame.click("#sentiment-input-txt");
    await my_frame.type(
      "#sentiment-input-txt",
      "It wasa good day. It wasa bad day. It was an ok day. I went outside. I stayed home."
    );

    await my_frame.click("#theSentimentSubmitBtn");

    await page.waitFor(2000);

    const sentiment_output = await my_frame.waitForSelector(
      "#sentiment-results-div"
    );

    expect(sentiment_output).toBeDefined();

    await browser.close();
  });
});
