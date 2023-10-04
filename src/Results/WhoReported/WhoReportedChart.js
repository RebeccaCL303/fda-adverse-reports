import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

import "../results.css";

export default function WRChart(props) {
 Chart.defaults.color = "lightgrey";
 if (props.WRChartData) {
  let reporterMap = {
   1: "Physician",
   2: "Pharmacist",
   3: "Other health professional",
   4: "Lawyer",
   5: "Consumer or non-health professional",
  };

  const data = {
   labels: props.WRChartData.map((row) => reporterMap[row.term]),
   datasets: [
    {
     label: "Reports",
     data: props.WRChartData.map((row) => row.count),
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
   <div className="WhoReportedChart">
    <Pie data={data} />
   </div>
  );
 } else {
  return null;
 }
}
