import React from "react";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

import "../results.css";

export default function InteractionsChart(props) {
 if (props.interactionsChartData) {
  const data = {
   labels: props.interactionsChartData.map((row) => row.term),
   datasets: [
    {
     label: "Reports",
     data: props.interactionsChartData.map((row) => row.count),
     backgroundColor: [
      "#004733",
      "#2B6A4D",
      "#568D66",
      "#A5C1AE",
      "#F3F4F6",
      "#DCDFE5",
      "#DF8080",
      "#CB0B0A",
      "#AD080F",
      "#8E0413",
     ],
     borderColor: ["#ffffff"],
     borderWidth: 1,
    },
   ],
  };
  return (
   <div className="InteractionsChart">
    <Pie data={data} />
   </div>
  );
 } else {
  return null;
 }
}
