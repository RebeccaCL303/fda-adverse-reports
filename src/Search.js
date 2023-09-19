import React, { useState } from "react";
import axios from "axios";

export default function Search() {
 let [query, setQuery] = useState("");

 function handleChange(event) {
  setQuery(event.target.value);
 }

 function logSubmit(event) {
  event.preventDefault();
  let key = "6JlKzLqCMFly6SbLMcjq9ylzhrXC9Ltf29PqqPhe";
  let url = `https://api.fda.gov/drug/event.json?api_key=${key}&search=(receivedate:[20040101+TO+20230919])+AND+${query}&count=receivedate`;
  axios.get(url).then(test);
 }

 function test(response) {
  console.log(response.data.results);
 }

 return (
  <form onSubmit={logSubmit}>
   <input type="text" onChange={handleChange} />
   <input type="submit" value="Search" />
  </form>
 );
}
