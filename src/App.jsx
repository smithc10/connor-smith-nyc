// import Button from "@mui/material/Button";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";

import "./App.css";
import * as applicationText from "./locale/en-US/copy.json";

const {
  workExperience: { americanExpress }
} = applicationText;

const {
  workExperience: { uOfA }
} = applicationText;

function App() {
  return (
    <div className="App">
      <Header />
      <section id="work-experience">
        <h2>Work Experience</h2>
        <WorkExperience
          companyName={americanExpress.name}
          description={americanExpress.description}
        />
        <WorkExperience
          companyName={uOfA.name}
          description={uOfA.description}
        />
      </section>
    </div>
  );
}

export default App;
