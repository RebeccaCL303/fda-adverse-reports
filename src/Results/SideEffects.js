import React from "react";

export default function SideEffects(props) {
 if (props.sideEffectData) {
  return (
   <div className="SideEffects">
    <ul>
     {props.sideEffectData.results.map(function (effect, index) {
      return (
       <li key={index}>
        Complaint: {effect.term}
        <br />
        Frequency: {effect.count} complaints
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
