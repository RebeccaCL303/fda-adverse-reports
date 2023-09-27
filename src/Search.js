import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

import TotalReports from "./Results/TotalReports";
import SideEffects from "./Results/SideEffects";
import PieChart from "./PieChart.js";
import WhoReported from "./Results/WhoReported";

export default function Search() {
 let key = "6JlKzLqCMFly6SbLMcjq9ylzhrXC9Ltf29PqqPhe";
 let [query, setQuery] = useState("");
 let [drugName, setDrugName] = useState("");
 let [totalReports, setTotalReports] = useState("");
 let [sideEffects, setSideEffects] = useState("");
 let [whoReported, setWhoReported] = useState("");
 let [chartData, setChartData] = useState(null);

 function handleChange(event) {
  setQuery(event.target.value);
 }

 function getResults(event) {
  event.preventDefault();
  setDrugName(query);

  let totalReportsUrl = `https://api.fda.gov/drug/event.json?api_key=${key}&search=${query}&count=receivedate`;
  axios.get(totalReportsUrl).then(displayTotalReports);

  let sideEffectsUrl = `https://api.fda.gov/drug/event.json?api_key=${key}&search=${query}&count=patient.reaction.reactionmeddrapt.exact&limit=30`;
  axios.get(sideEffectsUrl).then(displaySideEffects);

  let whoReportedUrl = `https://api.fda.gov/drug/event.json?api_key=${key}&search=${query}&count=primarysource.qualification`;
  axios.get(whoReportedUrl).then(displayWhoReported);
 }

 function displayTotalReports(response) {
  setTotalReports(response.data.results.length);
 }

 function displaySideEffects(response) {
  setSideEffects(response.data);

  setChartData([
   {
    term: response.data.results[0].term,
    count: response.data.results[0].count,
   },
   {
    term: response.data.results[1].term,
    count: response.data.results[1].count,
   },
   {
    term: response.data.results[2].term,
    count: response.data.results[2].count,
   },
   {
    term: response.data.results[3].term,
    count: response.data.results[3].count,
   },
   {
    term: response.data.results[4].term,
    count: response.data.results[4].count,
   },
  ]);
 }

 function displayWhoReported(response) {
  setWhoReported(response.data);
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
   <TotalReports totalReportsData={totalReports} drugName={drugName} />
   <main>
    <SideEffects sideEffectData={sideEffects} />
    <PieChart chartData={chartData} />
    <WhoReported whoReportedData={whoReported} />
   </main>
  </div>
 );
}
