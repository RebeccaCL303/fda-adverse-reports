import React from "react";

export default function WhoReported(props) {
 let reporterMap = {
  1: "Physician",
  2: "Pharmacist",
  3: "Other health professional",
  4: "Lawyer",
  5: "Consumer or non-health professional",
 };

 if (props.whoReportedData) {
  return (
   <div className="WhoReported">
    <h2>Who Reported?</h2>
    <ul>
     {props.whoReportedData.results.map(function (reporter, index) {
      return (
       <li key={index}>
        <strong>{reporterMap[reporter.term]}</strong>: {reporter.count}{" "}
        complaints
       </li>
      );
     })}
    </ul>
   </div>
  );
 } else {
  return null;
 }
}
