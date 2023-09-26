import "./App.css";
import Search from "./Search.js";
import PieChart from "./PieChart.js";

function App() {
 return (
  <div className="App">
   <h1>FDA Adverse Event Reporting System (FAERS)</h1>
   <Search />
   <PieChart />
  </div>
 );
}

export default App;
