import { handleSubmit } from "../src/client/js/formHandler";
import puppeteer from "puppeteer";
import expect from "expect-puppeteer";

describe("Testing form submission", () => {
  test("text entered in input fields and submitted", async () => {
    let browser = await puppeteer.launch({
      headless: false,
      slowMo: 30,
    });

    let page = await browser.newPage();

    //change the defualt wait time
    await page.setDefaultTimeout(5000);
    //change the defualt naviagation wait time
    //await page.setDefaultNavigationTimeout(3000);

    await page.goto("http://localhost:8080/webpack-dev-server/");

    await page.waitFor(1000);
    await page.waitForSelector("input#summary-input-url");

    await page.click("input#summary-input-url");
    await page.type(
      "input#summary-input-url",
      "https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions"
    );
    await browser.close();
  });
});


//NOTES
//   await expect(page).toFill(
//     "#summary-input-url",
//     "https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions"
//   );
//   await expect(page).toFill("#summary-sentence-count", "5");
//   await page.toClick("submit");
//   await browser.close();
// });

// test("test if form submission updates DOM ...", async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   const app = "http://localhost:8080/webpack-dev-server/";
//   await page.goto(app);
//   await expect(page).toMatch("Results:");

// await page.click("input#summary-input-url");
// await page.type(
//   "input#summary-input-url",
//   "https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions"
// );

// await page.click("summary-sentence-count");
// await page.type("input#summary-sentence-count", "3");

// expect(await handleSubmit()).tobeTruthy();

// async function handleSubmit(event) {
//     event.preventDefault();
//     let client_url = await document.getElementById("summary-input-url").value;
//     let summary_sentences = await document.getElementById(
//       "summary-sentence-count"
//     ).value;
//     let client_data = {
//       sentences: summary_sentences,
//       summary_url: client_url,
//     };

//     console.log("client_data ..\n", client_data);
//     console.log("::: Form Submitted :::");

//     const server_msg = await Client.summaryRequest(
//       "http://localhost:3000/makeApiReq",
//       client_data
//     );

//     console.log("formHandler: Client.summaryRequest: server_msg", server_msg);

//     const data_2_display = await Client.serverDataRequest(
//       "http://localhost:3000/dataReq"
//     );

//     console.log(
//       "formHandler: Client.serverDataRequest: data_2_display",
//       data_2_display
//     );

//     Client.displayResult(data_2_display);
//   }

//   export { handleSubmit };
