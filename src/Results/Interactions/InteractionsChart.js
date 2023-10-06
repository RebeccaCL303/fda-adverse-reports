import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

export default function InteractionsChart(props) {
 if (props.interactionsChartData) {
  Chart.defaults.color = "lightgrey";
  const data = {
   labels: props.interactionsChartData.map((row) => row.term),
   datasets: [
    {
     label: "Reports",
     data: props.interactionsChartData.map((row) => row.count),
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
   <div className="InteractionsChart">
    <Pie data={data} />
   </div>
  );
 } else {
  return null;
 }
}
