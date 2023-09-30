import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

import TotalReports from "./Results/TotalReports";
import SideEffects from "./Results/SideEffects";
import Interactions from "./Results/Interactions.js";
import WhoReported from "./Results/WhoReported";

import SideEffectsChart from "./Charts/SideEffectsChart.js";
import InteractionsChart from "./Charts/InteractionsChart.js";
import WhoReportedChart from "./Charts/WhoReportedChart";

export default function Search() {
 let key = "6JlKzLqCMFly6SbLMcjq9ylzhrXC9Ltf29PqqPhe";
 let [query, setQuery] = useState("");
 let [drugName, setDrugName] = useState("");

 let [totalReports, setTotalReports] = useState("");
 let [sideEffects, setSideEffects] = useState("");
 let [interactions, setInteractions] = useState("");
 let [whoReported, setWhoReported] = useState("");

 let [SEChartData, setSEChartData] = useState("");
 let [interactionsChartData, setInteractionsChartData] = useState("");
 let [WRChartData, setWRChartData] = useState("");

 function handleChange(event) {
  setQuery(event.target.value);
 }

 function getResults(event) {
  event.preventDefault();
  setDrugName(query);

  let totalReportsUrl = `https://api.fda.gov/drug/event.json?api_key=${key}&search=${query}&count=receivedate`;
  axios.get(totalReportsUrl).then(displayTotalReports);

  let sideEffectsUrl = `https://api.fda.gov/drug/event.json?api_key=${key}&search=${query}&count=patient.reaction.reactionmeddrapt.exact&limit=13`;
  axios.get(sideEffectsUrl).then(displaySideEffects);

  let interactionUrl = `https://api.fda.gov/drug/label.json?api_key=${key}&search=drug_interactions:${query}&count=openfda.substance_name.exact&limit=13`;
  axios.get(interactionUrl).then(displayInteractions);

  let whoReportedUrl = `https://api.fda.gov/drug/event.json?api_key=${key}&search=${query}&count=primarysource.qualification`;
  axios.get(whoReportedUrl).then(displayWhoReported);
 }

 function displayTotalReports(response) {
  setTotalReports(response.data.results.length);
 }

 function displaySideEffects(response) {
  setSideEffects(response.data);

  setSEChartData([
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
   {
    term: response.data.results[5].term,
    count: response.data.results[5].count,
   },
   {
    term: response.data.results[6].term,
    count: response.data.results[6].count,
   },
   {
    term: response.data.results[7].term,
    count: response.data.results[7].count,
   },
   {
    term: response.data.results[8].term,
    count: response.data.results[8].count,
   },
   {
    term: response.data.results[9].term,
    count: response.data.results[9].count,
   },
  ]);
 }

 function displayInteractions(response) {
  setInteractions(response.data);

  setInteractionsChartData([
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
   {
    term: response.data.results[5].term,
    count: response.data.results[5].count,
   },
   {
    term: response.data.results[6].term,
    count: response.data.results[6].count,
   },
   {
    term: response.data.results[7].term,
    count: response.data.results[7].count,
   },
   {
    term: response.data.results[8].term,
    count: response.data.results[8].count,
   },
   {
    term: response.data.results[9].term,
    count: response.data.results[9].count,
   },
  ]);
 }

 function displayWhoReported(response) {
  setWhoReported(response.data);

  setWRChartData([
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

 return (
  <div className="Search">
   <p>
    The FDA Adverse Event Reporting System (FAERS) is a database that contains
    adverse event reports, medication error reports and product quality
    complaints resulting in adverse events that were submitted to FDA. Enter the
    name of a drug below (brand or generic) to find information such as reported
    side effects and interactions.
   </p>
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

   <section>
    <SideEffects sideEffectData={sideEffects} />
    <SideEffectsChart SEChartData={SEChartData} />
   </section>
   <section>
    <InteractionsChart interactionsChartData={interactionsChartData} />
    <Interactions interactionsData={interactions} />
   </section>
   <section>
    <WhoReported whoReportedData={whoReported} />
    <WhoReportedChart WRChartData={WRChartData} />
   </section>
  </div>
 );
}
