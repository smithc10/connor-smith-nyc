// import Button from "@mui/material/Button";
import "@fontsource/roboto";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";

import "./App.scss";
import * as applicationText from "./locale/en-US/copy.json";

const {
  workExperience: { americanExpress, uOfA }
} = applicationText;

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <h2 id="work-experience-header">Work Experience</h2>
        <WorkExperience
          companyLogo={americanExpress.logoUrl}
          companyName={americanExpress.name}
          description={americanExpress.description}
        />
        <WorkExperience
          companyLogo={uOfA.logoUrl}
          companyName={uOfA.name}
          description={uOfA.description}
        />
      </section>
    </div>
  );
}

export default App;
