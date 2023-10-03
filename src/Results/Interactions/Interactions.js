import React from "react";

import "../results.css";

export default function Interactions(props) {
 if (props.interactionsData) {
  return (
   <div className="Interactions">
    <h3>Interactions</h3>
    <ul>
     {props.interactionsData.results.map(function (interaction, index) {
      return (
       <li key={index}>
        <strong>{interaction.term}</strong>:{" "}
        <span className="opacity-less">{interaction.count} reports</span>
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
