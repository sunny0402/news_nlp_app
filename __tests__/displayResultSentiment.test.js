/**
 * @jest-environment jsdom
 */

import { displayResultSentiment } from "../src/client/js/displayResultSentiment";

describe("Testing get server data and update DOM", () => {
  test("test if DOM updated with response from server ...", async () => {
    document.body.innerHTML =
      "<!DOCTYPE html>" +
      '<html lang="en">' +
      "<head><title>displayResult.test.js</title></head>" +
      "<body>" +
      '<div id="sentiment-results-div">' +
      "<p>text which should be updated...</p>";
    "</div>" + "</body> </html>";

    const data_2_display = {
      sentiment_stats: {
        my_score_tag: "P",
        my_confidence: "94",
        my_irony: "NONIRONIC",
        my_sentence_list: [
          { text: "A great day.", score_tag: "P+", confidence: "100" },
          { text: "A bad day.", score_tag: "N", confidence: "100" },
          { text: "Excellent food.", score_tag: "P+", confidence: "100" },
        ],
      },
    };

    displayResultSentiment(data_2_display);

    //assertions / expects
    expect(
      document.getElementById("sentiment-results-div").textContent
    ).toEqual(expect.stringContaining("94"));
  });

  // const expected = [
  //   expect.stringContaining("A great day."),
  //   expect.stringContaining("A bad day."),
  //   expect.stringContaining("Excellent food."),
  // ];

  // expect(document.getElementById("sentiment-results-div").textContent).toEqual(
  //   expect.arrayContaining(expected)
  // );
});
