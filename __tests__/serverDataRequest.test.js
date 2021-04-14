const { serverDataRequest } = require("../src/client/js/serverDataRequest");

describe("Testing get the get data on server functionality", () => {
  test("test if response from server is defined ...", async () => {
    const fn_input = "http://localhost:3000/dataReq";
    const response = await serverDataRequest(fn_input);
    const summary = await response.summary;
    expect(summary).toBeDefined();
  });
});
