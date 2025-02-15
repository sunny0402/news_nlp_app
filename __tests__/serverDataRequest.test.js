const { serverDataRequest } = require("../src/client/js/serverDataRequest");

describe("Testing get SUMMARY data from server functionality", () => {
  test("test if response from server is defined ...", async () => {
    const fn_input = "http://localhost:3030/dataReq";
    const response = await serverDataRequest(fn_input);

    console.log("response ... \n", response);
    console.log("response end ...");

    const summary = await response.summary;
    expect(summary).toBeDefined();
  });
});
