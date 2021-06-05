const {
  serverDataRequestSentiment,
} = require("../src/client/js/serverDataRequestSentiment");

describe("Testing get SENTIMENT data from server functionality", () => {
  test("test if response from server is defined ...", async () => {
    const fn_input = "http://localhost:3030/dataReqSentiment";
    const response = await serverDataRequestSentiment(fn_input);

    console.log("response ... \n", response);
    console.log("response end ...");

    // const summary = await response.summary;
    // expect(summary).toBeDefined();
    expect(response).toBeDefined();
  });
});
