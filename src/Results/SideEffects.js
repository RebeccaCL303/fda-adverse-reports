import React from "react";

export default function SideEffects(props) {
 let sideEffectStats = [
  {
   term: props.sideEffectData.results[0].term,
   count: props.sideEffectData.results[0].count,
  },
  {
   term: props.sideEffectData.results[1].term,
   count: props.sideEffectData.results[1].count,
  },
  {
   term: props.sideEffectData.results[2].term,
   count: props.sideEffectData.results[2].count,
  },
  {
   term: props.sideEffectData.results[3].term,
   count: props.sideEffectData.results[3].count,
  },
  {
   term: props.sideEffectData.results[4].term,
   count: props.sideEffectData.results[4].count,
  },
 ];

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
