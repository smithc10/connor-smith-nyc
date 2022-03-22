import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import "@fontsource/roboto";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import TechnicalSkills from "./components/TechnicalSkills";
import WorkExperience from "./components/WorkExperience";

import "./App.scss";
import * as applicationText from "./locale/en-US/copy.json";

const {
  workExperience: { americanExpress, uOfA },
  aboutMe,
  technicalSkills
} = applicationText;

function App() {
  return (
    <Grid className="App" container spacing={0}>
      <Grid item lg={4} rowSpacing={12} class="header-grid" sm={12}>
        <Header />
      </Grid>
      <Grid item lg={8} sm={12}>
        <AboutMe
          header={aboutMe.header}
          firstParagraph={aboutMe.firstParagraph}
          secondParagraph={aboutMe.secondParagraph}
        />
      </Grid>
      <Grid item lg={8} sm={12}>
        <TechnicalSkills
          header={technicalSkills.header}
          firstListItem={technicalSkills.firstListItem}
          firstListContent={technicalSkills.firstListContent}
          secondListItem={technicalSkills.secondListItem}
          secondListContent={technicalSkills.secondListContent}
        />
      </Grid>
      <Grid item sm={12} lg={9}>
        <section>
          <h2 id="work-experience-header">Work Experience</h2>
          <WorkExperience
            companyLogo={americanExpress.logoUrl}
            companyName={americanExpress.name}
            description={americanExpress.description}
            position={americanExpress.position}
            tenure={americanExpress.tenure}
          />
          <WorkExperience
            companyLogo={uOfA.logoUrl}
            companyName={uOfA.name}
            description={uOfA.description}
            position={uOfA.position}
            tenure={uOfA.tenure}
          />
        </section>
      </Grid>
    </Grid>
  );
}

export default App;
