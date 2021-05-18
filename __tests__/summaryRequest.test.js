const { summaryRequest } = require("../src/client/js/summaryRequest");

describe("Testing get SUMMARY data from server functionality", () => {
  test("test if response from server is defined ...", async () => {
    const fn_input_server_endpoint = "http://localhost:3030/makeSummaryApiReq";
    const fn_input_DOM_data = {
      sentences: "5",
      summary_url:
        "https://www.geeksforgeeks.org/how-to-access-variables-from-another-file-using-javascript/",
    };

    await summaryRequest(fn_input_server_endpoint, fn_input_DOM_data).then(
      (msg) => {
        expect(msg).toBeDefined();
      }
    );
  });
});
