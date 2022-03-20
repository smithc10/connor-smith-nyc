import PropTypes from "prop-types";

function WorkExperience({ companyLogo, companyName, description }) {
  return (
    <div id="work-experience">
      <div class="employment-section">
        <div class="logo-container">
          <img src={companyLogo} alt="company-logo" class="resize"></img>
        </div>
        <div class="employment-text">
          <h3>{companyName}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

WorkExperience.propTypes = {
  companyLogo: PropTypes.string,
  companyName: PropTypes.string,
  description: PropTypes.string
};

export default WorkExperience;
