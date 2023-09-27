import React from "react";

export default function Interactions(props) {
 if (props.interactionsData) {
  return (
   <div className="Interactions">
    <h2>Interactions</h2>
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
