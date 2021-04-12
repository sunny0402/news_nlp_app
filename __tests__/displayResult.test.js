import mockServerDataRequest from "../__mocks__/serverDataRequest";
import { displayResult } from "../src/client/js/displayResult";

describe("Testing get server data and update DOM", () => {
  test("response from server is defined ...", () => {
    // setup
    const test_response = mockServerDataRequest.get.mockImplementationOnce(() =>
      Promise.resolve({
        summary: `A sample summary paragraph. With a couple sentences. The sentences
    The sentences hopefully summarize the information of the page.`,
      })
    );

    const sample_summary = `<p>${test_response}</p>`;
    document.body.innerHTML =
      '<div id="results">' + `${sample_summary}` + "</div>";

    //test
    const result_2_display = displayResult(test_response);

    // assertions / expects
    expect(result_2_display).toBe("");
    expect(document.getElementById("results").innerHTML).toEqual(
      `${sample_summary.innerHTML}`
    );
  });
});

/*

function displayResult(data_obj_from_server) {
  // event.preventDefault();
  let result = document.getElementById("results");
  result.innerHTML = "";

  console.log("displayResult: data_obj_from_server", data_obj_from_server);

  let summary_text = document.createElement("p");
  summary_text.innerHTML = data_obj_from_server.summary;
  result.appendChild(summary_text);
}

export { displayResult };

*/
