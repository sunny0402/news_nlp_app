function displayResultSentiment(data_obj_from_server) {
  // event.preventDefault();
  let result = document.getElementById("sentiment-results-div");
  result.innerHTML = "";

  console.log("displayResult: data_obj_from_server", data_obj_from_server);

  let sentiment_text = document.createElement("p");

  sentiment_text.id = "theSentimentParagraph";

  //This is what will be displayed.
  sentiment_text.innerHTML = `Overall Sentiment Score: ${data_obj_from_server.sentiment_stats.my_score_tag} `;

  let sentence_list = document.createElement("ul");
  data_obj_from_server.sentiment_stats.my_sentence_list.forEach(
    (a_sentence, an_index) => {
      let child_sentence = document.createElement("li");
      child_sentence.id = `sentence_${an_index}`;
      child_sentence.innerHTML = `sentence text: ${a_sentence.text} 
         sentiment score: ${a_sentence.score_tag} 
         confidence: ${a_sentence.confidence}`;
      sentence_list.appendChild(child_sentence);
    }
  );

  result.appendChild(sentiment_text);
  sentiment_text.appendChild(child_sentence);
}

export { displayResultSentiment };

// EXAMPLE SERVER SENTIMENT RESPONSE
// sentiment_stats
// {
//   my_score_tag: 'P',
//   my_confidence: '94',
//   my_irony: 'NONIRONIC',
//   my_sentence_list: [
//     { text: 'A great day.', score_tag: 'P+', confidence: '100' },
//     { text: 'A bad day.', score_tag: 'N', confidence: '100' },
//     { text: 'Excellent food.', score_tag: 'P+', confidence: '100' }
//   ]
// }

//.style
// sentiment_text.style.width = "80%";
// sentiment_text.style.margin = "0 auto";
// sentiment_text.style.scrollIntoView();
