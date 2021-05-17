/**
 * @jest-environment jsdom
 */

import { displayResult } from "../src/client/js/displayResult";
import { serverDataRequest } from "../src/client/js/serverDataRequest";

describe("Testing get server data and update DOM", () => {
  test("test if DOM updated with response from server ...", async () => {
    document.body.innerHTML =
      "<!DOCTYPE html>" +
      '<html lang="en">' +
      "<head><title>displayResult.test.js</title></head>" +
      "<body>" +
      '<div id="summary-results-div">' +
      "<p>text which should be updated...</p>";
    "</div>" + "</body> </html>";

    const data_2_display = {
      summary: "A sample response from the server.",
    };

    displayResult(data_2_display);

    //assertions / expects
    expect(document.getElementById("summary-results-div").textContent).toBe(
      "A sample response from the server."
    );
  });
});
