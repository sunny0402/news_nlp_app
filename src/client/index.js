import { handleSubmit } from "./js/formHandler";
import { summaryRequest } from "./js/summaryRequest";
import { displayResult } from "./js/displayResult";
import { serverDataRequest } from "./js/serverDataRequest";
import { sentimentRequest } from "./js/sentimentRequest";
import { handleSubmitSentiment } from "./js/formHandlerSentiment";
import { displayResultSentiment } from "./js/displayResultSentiment";
import { serverDataRequestSentiment } from "./js/serverDataRequestSentiment";

/*because of the dependency tree that webpack builds, 
if nothing ever is imported, it’s as if it doesn’t exist.*/

/* this file is the entry point for webpack! */

import "./styles/resets.scss";
import "./styles/base.scss";

// alert("entry point exists ");

export {
  handleSubmit,
  summaryRequest,
  displayResult,
  serverDataRequest,
  sentimentRequest,
  handleSubmitSentiment,
  displayResultSentiment,
  serverDataRequestSentiment,
};
