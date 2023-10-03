import React from "react";

export default function SideEffects(props) {
 if (props.sideEffectData) {
  return (
   <div className="SideEffects">
    <h3>Adverse Reactions</h3>
    <ul>
     {props.sideEffectData.results.map(function (effect, index) {
      return (
       <li key={index}>
        <strong>{effect.term}</strong>: {effect.count} reports
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
