import React from "react";

export default function TotalReports(props) {
 if (props.totalReportsData) {
  return (
   <div className="TotalReports">
    {" "}
    <h2>Total number of reports: {props.totalReportsData}</h2>
   </div>
  );
 } else {
  return null;
 }
}
