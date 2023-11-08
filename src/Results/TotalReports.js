import React from "react";

export default function TotalReports(props) {
 if (props.totalReportsData) {
  return (
   <div className="TotalReports">
    <h2>
     <small>
      {" "}
      <span className="capitalize">{props.drugName}</span> - Total number of
      reports: {props.totalReportsData}
     </small>
    </h2>
   </div>
  );
 } else {
  return null;
 }
}
