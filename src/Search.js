import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

import TotalReports from "./Results/TotalReports";
import SideEffects from "./Results/SideEffects/SideEffects";
import SideEffectsChart from "./Results/SideEffects/SideEffectsChart.js";
import Interactions from "./Results/Interactions/Interactions.js";
import InteractionsChart from "./Results/Interactions/InteractionsChart.js";
import WhoReported from "./Results/WhoReported/WhoReported";
import WhoReportedChart from "./Results/WhoReported/WhoReportedChart";

export default function Search() {
 let key = "6JlKzLqCMFly6SbLMcjq9ylzhrXC9Ltf29PqqPhe";
 let [query, setQuery] = useState("");
 let [drugName, setDrugName] = useState("");
 let [tabs, setTabs] = useState("");

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

  setTabs(
   <div>
    <button onClick={sideEffectsActive}>Adverse Reactions</button>
    <button onClick={interactionsActive}>Interactions</button>
    <button onClick={whoReportedActive}>Who Reported?</button>
   </div>
  );
 }
 let interactionsElement = document.getElementById("interactions");
 let sideEffectsElement = document.getElementById("side-effects");
 let whoReportedElement = document.getElementById("who-reported");

 function interactionsActive() {
  interactionsElement.classList.remove("inactive");
  interactionsElement.classList.add("active");

  if (sideEffectsElement.classList.contains("active")) {
   sideEffectsElement.classList.remove("active");
   sideEffectsElement.classList.add("inactive");
  }

  if (whoReportedElement.classList.contains("active")) {
   whoReportedElement.classList.remove("active");
   whoReportedElement.classList.add("inactive");
  }
 }

 function sideEffectsActive() {
  sideEffectsElement.classList.remove("inactive");
  sideEffectsElement.classList.add("active");

  if (interactionsElement.classList.contains("active")) {
   interactionsElement.classList.remove("active");
   interactionsElement.classList.add("inactive");
  }

  if (whoReportedElement.classList.contains("active")) {
   whoReportedElement.classList.remove("active");
   whoReportedElement.classList.add("inactive");
  }
 }

 function whoReportedActive() {
  whoReportedElement.classList.remove("inactive");
  whoReportedElement.classList.add("active");

  if (sideEffectsElement.classList.contains("active")) {
   sideEffectsElement.classList.remove("active");
   sideEffectsElement.classList.add("inactive");
  }

  if (interactionsElement.classList.contains("active")) {
   interactionsElement.classList.remove("active");
   interactionsElement.classList.add("inactive");
  }
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
   <p className="opacity-less">
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
   <div className="center-text">
    <TotalReports totalReportsData={totalReports} drugName={drugName} />
    {tabs}
   </div>
   <section className="active" id="side-effects">
    <SideEffects sideEffectData={sideEffects} />
    <SideEffectsChart SEChartData={SEChartData} />
   </section>
   <section className="inactive" id="interactions">
    <Interactions interactionsData={interactions} />
    <InteractionsChart interactionsChartData={interactionsChartData} />
   </section>
   <section className="inactive" id="who-reported">
    <WhoReported whoReportedData={whoReported} />
    <WhoReportedChart WRChartData={WRChartData} />
   </section>
  </div>
 );
}
