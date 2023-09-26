import React from "react";

export default function SideEffects(props) {
 if (props.sideEffectData) {
  return (
   <section className="SideEffects">
    <h2>Adverse Reactions</h2>
    <ul>
     {props.sideEffectData.results.map(function (effect, index) {
      return (
       <li key={index}>
        <strong>{effect.term}</strong>: {effect.count} reports
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
