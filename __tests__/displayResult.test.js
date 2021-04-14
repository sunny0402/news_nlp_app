import { displayResult } from "../src/client/js/displayResult";
import { serverDataRequest } from "../src/client/js/serverDataRequest";

describe("Testing get server data and update DOM", () => {
  test("test if DOM updated with response from server ...", async () => {
    document.body.innerHTML = '<div id="results">' + "</div>";

    const data_2_display = await serverDataRequest(
      "http://localhost:3000/dataReq"
    );

    displayResult(data_2_display);

    console.log(document.getElementById("results").textContent);

    //assertions / expects
    expect(document.getElementById("results").textContent).toBeDefined();
  });
});
