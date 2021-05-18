const {
  serverDataRequestSentiment,
} = require("../src/client/js/serverDataRequestSentiment");

describe("Testing get data on server functionality", () => {
  test("test if response from server is defined ...", async () => {
    const fn_input = "http://localhost:3030/dataReqSentiment";
    const response = await serverDataRequestSentiment(fn_input);

    console.log("response ... \n", response);
    console.log("response end ...");

    const sentiment = await response.sentiment_stats;
    expect(sentiment).toBeDefined();
  });
});
