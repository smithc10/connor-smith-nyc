import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";

function Header() {
  return (
    <header id="header" class="header">
      <h1>Connor Smith</h1>
      <h3>Software Engineer</h3>
      <h4>New York, NY</h4>
      <div class="link-row">
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vR_9RQgGeSho2wpa3J_RvUVH40JRyx9hrMHdiNbQrB9h32mTEX_Hddvu3f3KxDjS0LZ8slPiFrRVf6U/pub"
          target="_blank"
        >
          <ArticleIcon />
        </a>
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
    </header>
  );
}

export default Header;
