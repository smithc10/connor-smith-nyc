import PropTypes from "prop-types";

function WorkExperience({ companyLogo, companyName, description, tenure }) {
  return (
    <div id="work-experience">
      <div class="employment-section">
        <div class="logo-container">
          <img
            src={companyLogo}
            id="company-logo-img"
            alt="company-logo"
            class="resize"
          ></img>
        </div>
        <div class="employment-text">
          <h3>{companyName}</h3>
          <h5>{tenure}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

WorkExperience.propTypes = {
  companyLogo: PropTypes.string,
  companyName: PropTypes.string,
  description: PropTypes.string,
  tenure: PropTypes.string
};

export default WorkExperience;
