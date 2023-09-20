import React, { useState } from "react";
import axios from "axios";

import TotalReports from "./Results/TotalReports";

export default function Search() {
 let key = "6JlKzLqCMFly6SbLMcjq9ylzhrXC9Ltf29PqqPhe";
 let [query, setQuery] = useState("");
 let [totalReports, setTotalReports] = useState("");

 function handleChange(event) {
  setQuery(event.target.value);
 }

 function getResults(event) {
  event.preventDefault();

  let totalReportsUrl = `https://api.fda.gov/drug/event.json?api_key=${key}&search=(receivedate:[20040101+TO+20230919])+AND+${query}&count=receivedate`;
  axios.get(totalReportsUrl).then(displayResults);
 }

 function displayResults(response) {
  setTotalReports(response.data.results.length);
 }

 return (
  <div className="Search">
   <form onSubmit={getResults}>
    <input type="text" onChange={handleChange} />
    <input type="submit" value="Search" />
   </form>
   <TotalReports total={totalReports} />
  </div>
 );
}
