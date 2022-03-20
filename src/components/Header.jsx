import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import logo from "../assets/logo.svg";

function Header() {
  return (
    <header id="header" className="header">
      <h1>Connor Smith</h1>
      <h2>Software Engineer</h2>
      <h3>New York, NY</h3>
      <div class="link-row">
        <a href="mailto: csmith8dev@gmail.com" target="_blank">
          <EmailIcon />
        </a>
        <a href="https://www.linkedin.com/in/connor-smith-nyc/" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/smithc10" target="_blank">
          <GitHubIcon />
        </a>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default Header;
