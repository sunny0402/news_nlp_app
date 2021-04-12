const { summaryRequest } = require("../src/client/js/summaryRequest");
//hard coded user input for the test
//const { client_data } = require("../src/client/js/formHandler");

describe("Testing send user input to server functionality", () => {
  const fn_input_server_url = "http://localhost:3000/makeApiReq";
  const fn_input_client_data = {
    sentences: "5",
    summary_url:
      "https://www.geeksforgeeks.org/how-to-access-variables-from-another-file-using-javascript/",
  };

  test("data sent and saved to server and success message received ...", async () => {
    await summaryRequest(fn_input_server_url, fn_input_client_data).then(
      (msg) => {
        expect(msg).toBeDefined();
      }
    );
  });
});
