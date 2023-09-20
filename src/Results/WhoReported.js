import React from "react";
import "./WhoReported.css";

export default function WhoReported(props) {
 if (props.whoReportedData) {
  return (
   <section className="WhoReported">
    <ul>
     {props.whoReportedData.results.map(function (reporter, index) {
      return (
       <li key={index}>
        {reporter.term}: {reporter.count} complaints
       </li>
      );
     })}
    </ul>
   </section>
  );
 } else {
  return null;
 }
}
