const { summaryRequest } = require("../src/client/js/summaryRequest");

describe("Testing send user input to server functionality", () => {
  //hard coded user input for the test, more advanced simulate DOM with jsdom
  //https://jestjs.io/docs/tutorial-jquery
  test("test if data sent and saved to server and success message received ...", async () => {
    const fn_input_server_url = "http://localhost:3000/makeApiReq";
    const fn_input_client_data = {
      sentences: "5",
      summary_url:
        "https://www.geeksforgeeks.org/how-to-access-variables-from-another-file-using-javascript/",
    };

    await summaryRequest(fn_input_server_url, fn_input_client_data).then(
      (msg) => {
        expect(msg).toBeDefined();
      }
    );
  });
});
