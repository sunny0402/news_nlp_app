const { serverDataRequest } = require("../src/client/js/serverDataRequest");

describe("Testing get the get data on server functionality", () => {
  const fn_input = "http://localhost:3000/dataReq";

  test("response from server is defined ...", async () => {
    await serverDataRequest(fn_input).then((data) => {
      expect(data.sumary).toBeDefined();
    });
  });
});
