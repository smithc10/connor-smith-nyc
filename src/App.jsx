// import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

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
    <Grid className="App" container spacing={0}>
      <Grid item lg={4} rowSpacing={12} class="header-grid" sm={12}>
        <Header />
      </Grid>
      <Grid item lg={8} sm={12}>
        <section id="about-me">
          <div>
            <h2 class="about-me-header">About Me</h2>
          </div>
        </section>
      </Grid>

      <Grid item sm={12} lg={9}>
        <section>
          <h2 id="work-experience-header">Work Experience</h2>
          <WorkExperience
            companyLogo={americanExpress.logoUrl}
            companyName={americanExpress.name}
            description={americanExpress.description}
            tenure={americanExpress.tenure}
          />
          <WorkExperience
            companyLogo={uOfA.logoUrl}
            companyName={uOfA.name}
            description={uOfA.description}
            tenure={uOfA.tenure}
          />
        </section>
      </Grid>
    </Grid>
  );
}

export default App;
