import "./App.css";
import Search from "./Search.js";

function App() {
 return (
  <div className="App">
   <header>
    <h1>FAERS</h1>
   </header>
   <main>
    <Search />
   </main>
   <footer>
    <section>
     <h4>Credit</h4>
     <p>
      This project is{" "}
      <a
       href="https://github.com/RebeccaCL303/fda-adverse-reports"
       rel="noreferrer noopener"
       target="_blank">
       open sourced
      </a>{" "}
      by Rebecca Leibowitz
     </p>

     <p>
      Information provided by{" "}
      <a href="https://open.fda.gov/" rel="noreferrer noopener">
       openFDA
      </a>{" "}
     </p>
    </section>
    <section>
     <h4>Resources</h4>
     <p>
      <a href="https://www.fda.gov/" target="_blank" rel="noreferrer noopener">
       FDA Website
      </a>
     </p>
     <p>
      <a
       href="https://www.fda.gov/drugs/surveillance/questions-and-answers-fdas-adverse-event-reporting-system-faers"
       target="_blank"
       rel="noreferrer noopener">
       About FAERS
      </a>
     </p>
     <p>
      <a
       href="https://fis.fda.gov/sense/app/95239e26-e0be-42d9-a960-9a5f7f1c25ee/sheet/7a47a261-d58b-4203-a8aa-6d3021737452/state/analysis"
       target="_blank"
       rel="noreferrer noopener">
       FAERS Public Dashboard
      </a>
     </p>
    </section>
    <section>
     <h4>Disclaimer</h4>
     <p>
      This application is{" "}
      <em>not meant to replace the advice of any healthcare provider</em>.
      Please consult with a physician before making any changes to your
      mediction regimen. I am not in any way affiliated with the FDA, FAERS, or
      any part of the US Government.
     </p>
    </section>
   </footer>
  </div>
 );
}

export default App;
