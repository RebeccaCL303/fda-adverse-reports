import "./App.css";

import axios from "axios";

function test(response) {
 console.log(response);
}

function logSubmit(event) {
 event.preventDefault();
 let key = "6JlKzLqCMFly6SbLMcjq9ylzhrXC9Ltf29PqqPhe";
 let url = `https://api.fda.gov/drug/event.json?api_key=${key}&search=(receivedate:[20040101+TO+20230919])+AND+lovastatin&count=receivedate`;
 axios.get(url).then(test);
}

function App() {
 return (
  <div className="App">
   <form onSubmit={logSubmit}>
    <input type="text" />
    <input type="submit" value="Search" />
   </form>
  </div>
 );
}

export default App;
