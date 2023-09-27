import React, { useState } from "react";
import axios from "axios";

import Interactions from "./Results/Interactions.js";

export default function SearchSecond(props) {
 let key = "6JlKzLqCMFly6SbLMcjq9ylzhrXC9Ltf29PqqPhe";
 let [interactions, setInteractions] = useState("");

 if (props.drugName) {
  let interactionUrl = `https://api.fda.gov/drug/label.json?api_key=${key}&search=drug_interactions:${props.drugName}&count=openfda.substance_name.exact&limit=20`;
  axios.get(interactionUrl).then(displayInteractions);

  function displayInteractions(response) {
   setInteractions(response.data);
  }

  return (
   <div className="SearchSecond">
    <Interactions interactionsData={interactions} />
   </div>
  );
 } else {
  return null;
 }
}
