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
      "#0C3E5E",
      "#155B87",
      "#2D92D1",
      "#74BBE8",
      "#97D1F4",
      "#97F4E5",
      "#74E8D4",
      "#2ED1B5",
      "#158774",
      "#0C5E50",
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
