import React from "react";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

export default function WRChart(props) {
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
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 159, 64, 0.2)",
      "rgba(255, 205, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(201, 203, 207, 0.2)",
     ],
     borderColor: [
      "rgb(255, 99, 132)",
      "rgb(255, 159, 64)",
      "rgb(255, 205, 86)",
      "rgb(75, 192, 192)",
      "rgb(54, 162, 235)",
      "rgb(153, 102, 255)",
      "rgb(201, 203, 207)",
     ],
     borderWidth: 1,
    },
   ],
  };
  return (
   <div className="WRChart">
    <Pie data={data} />
   </div>
  );
 } else {
  return null;
 }
}
