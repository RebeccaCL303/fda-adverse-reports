import React from "react";
import "./SideEffects.css";

export default function SideEffects(props) {
 if (props.sideEffectData) {
  return (
   <section className="SideEffects">
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
   </section>
  );
 } else {
  return null;
 }
}
