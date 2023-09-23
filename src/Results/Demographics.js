import React from "react";

export default function Demographics(props) {
 if (props.fSideEffectsData) {
  return (
   <section className="Demographics">
    <h3>Demographics (via sex of patient)</h3>
    <h4>Most common reports for women:</h4>
    <ul>
     {props.fSideEffectsData.results.map(function (effect, index) {
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
