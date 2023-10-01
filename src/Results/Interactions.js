import React from "react";

import "./Interactions.css";

export default function Interactions(props) {
 if (props.interactionsData) {
  return (
   <div className="Interactions">
    <h3>Interactions</h3>
    <ul>
     {props.interactionsData.results.map(function (interaction, index) {
      return (
       <li key={index}>
        <strong>{interaction.term}</strong>: {interaction.count} reports
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
