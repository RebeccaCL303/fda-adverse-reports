import React from "react";

export default function FSideEffects(props) {
 if (props.fSideEffectData) {
  return (
   <div className="FSideEffects">
    <h4>Most common reports for women:</h4>
    <ul>
     {props.fSideEffectData.results.map(function (effect, index) {
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
