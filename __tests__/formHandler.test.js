import { handleSubmit } from "../src/client/js/formHandler";
import puppeteer from "puppeteer";
//import expect from "expect-puppeteer";

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

    await my_frame.click("#summary-input-url");
    await my_frame.type(
      "#summary-input-url",
      "https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions"
    );

    await my_frame.click("#summary-sentence-count");
    await my_frame.type("#summary-sentence-count", "3");

    await my_frame.click("#theSummarySubmitBtn");

    await page.waitFor(2000);

    const summary_paragraph = await my_frame.waitForSelector(
      "#summary-results-div"
    );

    expect(summary_paragraph).toBeDefined();

    await browser.close();
  });
});

// const page_url = await page.url();
// console.log(page_url);

// // console.log("page.frames()", page.frames());
// const frame = await page.frames().find((f) => f.name() === "iframe");

// // const find_input_field = await frame.waitForSelector("#summary-input-url");
// const text = await frame.$eval(
//   "#summary-input-url",
//   (element) => element.textContent
// );
// console.log(text);
// //console.log("find_input_field", find_input_field);

// dumpFrameTree(page.mainFrame(), "");
// function dumpFrameTree(frame, indent) {
//   console.log(indent + frame.url());
//   console.log("frame.name()", frame.name());
//   for (const child of frame.childFrames()) {
//     dumpFrameTree(child, indent + "  ");
//   }
// }

// await page.waitForSelector("#summary-input-url");
// await page.click("#summary-input-url");
// await page.type(
//   "input#summary-input-url",
//   "https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions"
// );
// const the_output = await page.waitForSelector("#results");

// expect(the_output).toBeDefined();
// console.log("the_output", the_output);
// browser.close();

//   let browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 30,
//   });

//   let page = await browser.newPage();

//   //change the defualt wait time
//   await page.setDefaultTimeout(5000);
//   //change the defualt naviagation wait time
//   //await page.setDefaultNavigationTimeout(3000);

//   await page.goto("http://localhost:8080/webpack-dev-server/");

//   //await page.waitFor(1000);
//   // await page.waitForSelector("input#summary-input-url");
//   await page.waitForSelector("#summary-input-url");

//   await page.click("input#summary-input-url");
//   await page.type(
//     "input#summary-input-url",
//     "https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions"
//   );
//   await browser.close();
// });

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
