let axios = require("axios");

async function sentimentAnalysisRequest(options) {
  try {
    const response = await axios.request(options);
    console.log("response from axios request", response.data);
    const sentiment_facts = {
      sentiment: response.data.score_tag,
      confidence: response.data.confidence,
      irony: response.data.irony,
    };
    console.log(
      "sentimentAnalysisRequest: sentiment_facts \n",
      sentiment_facts
    );
    return sentiment_facts;
  } catch (error) {
    console.log("error", error);
    alert(error);
  }
}

export { sentimentAnalysisRequest };

/*
Response

score_tag
P+: strong positive
P: positive
NEU: neutral
N: negative
N+: strong negative
NONE: without sentiment

confidence
0-100

irony
NONIRONIC: the text does not have ironic marks
IRONIC: the text has ironic marks

*/
