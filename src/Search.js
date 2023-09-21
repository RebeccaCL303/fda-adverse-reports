import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

import TotalReports from "./Results/TotalReports";
import SideEffects from "./Results/SideEffects";
import WhoReported from "./Results/WhoReported";

export default function Search() {
 let key = "6JlKzLqCMFly6SbLMcjq9ylzhrXC9Ltf29PqqPhe";
 let [query, setQuery] = useState("");
 let [totalReports, setTotalReports] = useState("");
 let [sideEffects, setSideEffects] = useState("");
 let [whoReported, setwhoReported] = useState("");

 function handleChange(event) {
  setQuery(event.target.value);
 }

 function getResults(event) {
  event.preventDefault();

  let totalReportsUrl = `https://api.fda.gov/drug/event.json?api_key=${key}&search=(receivedate:[20040101+TO+20230920])+AND+${query}&count=receivedate`;
  axios.get(totalReportsUrl).then(displayTotalReports);

  let sideEffectsUrl = `https://api.fda.gov/drug/event.json?api_key=${key}&search=(receivedate:[20040101+TO+20230920])+AND+${query}&count=patient.reaction.reactionmeddrapt.exact&limit=30`;
  axios.get(sideEffectsUrl).then(displaySideEffects);

  let whoReportedUrl = `https://api.fda.gov/drug/event.json?api_key=${key}&search=(receivedate:[20040101+TO+20230920])+AND+${query}&count=primarysource.qualification`;
  axios.get(whoReportedUrl).then(displayWhoReported);
 }

 function displayTotalReports(response) {
  setTotalReports(response.data.results.length);
 }

 function displaySideEffects(response) {
  setSideEffects(response.data);
 }

 function displayWhoReported(response) {
  setwhoReported(response.data);
 }

 return (
  <div className="Search">
   <form onSubmit={getResults}>
    <input
     id="drug-search"
     type="text"
     placeholder="Enter the name of a medication..."
     onChange={handleChange}
    />
    <input type="submit" value="Search" />
   </form>
   <label htmlFor="drug-search">
    i.e. levothyroxine, atorvastatin, venlafaxine
   </label>
   <TotalReports totalReportsData={totalReports} />
   <main>
    <SideEffects sideEffectData={sideEffects} />
    <WhoReported whoReportedData={whoReported} />
   </main>
  </div>
 );
}
