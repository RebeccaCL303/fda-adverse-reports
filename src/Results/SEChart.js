import Chart from "chartjs";

export default function SEChart(props) {
 if (props.sideEffectStats) {
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

  new Chart(document.getElementById("sideEffectChart"), {
   type: "bar",
   data: {
    labels: sideEffectStats.map((row) => row.term),
    datasets: [
     {
      label: "number of reports",
      data: sideEffectStats.map((row) => row.count),
     },
    ],
   },
  });
 }
}
