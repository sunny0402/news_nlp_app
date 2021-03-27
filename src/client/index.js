import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";
import { sentimentAnalysisRequest } from "./js/sentimentRequest";

/*because of the dependency tree that webpack builds, 
if nothing ever is imported, it’s as if it doesn’t exist.*/

/* this file is the entry point for webpack! */

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

console.log(checkForName);

alert("entry point exists ");

export { checkForName, handleSubmit, sentimentAnalysisRequest };
