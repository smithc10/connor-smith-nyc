import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import logo from "../logo.svg";

function Header() {
  return (
    <header className="App-header">
      <h1>Connor Smith</h1>
      <h2>Software Engineer</h2>
      <h3>New York, NY</h3>
      <div class="link-row">
        <a href="https://www.linkedin.com/in/connor-smith-nyc/" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/smithc10" target="_blank">
          <GitHubIcon />
        </a>
      </div>{" "}
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default Header;
