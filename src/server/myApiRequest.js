let axios = require("axios");

async function myApiRequest(client_input) {
  var summary_req = {
    method: "POST",
    baseURL: "https://api.meaningcloud.com",
    url: `/summarization-1.0?key=${process.env.API_KEY}&sentences=${client_input.sentences}&url=${client_input.summary_url}`,
    headers: {},
    maxRedirects: 20,
  };
  try {
    const response = await axios.request(summary_req);
    console.log("response from axios request", response);
    const summary_object = {
      summary: response.data.summary,
    };
    console.log("summaryRequest: summary_object \n", summary_object);
    return summary_object;
  } catch (error) {
    console.log("error", error);
    alert(error);
  }
}

export { myApiRequest };
