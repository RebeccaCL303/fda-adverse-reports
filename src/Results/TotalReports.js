import React from "react";

export default function TotalReports(props) {
 if (props.total) {
  return (
   <div className="TotalReports">
    {" "}
    <h2>Total number of reports: {props.total}</h2>
   </div>
  );
 } else {
  return null;
 }
}
