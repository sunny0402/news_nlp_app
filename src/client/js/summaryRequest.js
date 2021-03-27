let axios = require("axios");

async function summaryRequest(options) {
  try {
    const response = await axios.request(options);
    console.log("response from axios request", response.data);
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

export { summaryRequest };
