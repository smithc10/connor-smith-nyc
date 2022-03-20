import PropTypes from "prop-types";

function WorkExperience({ companyName, description }) {
  return (
    <div className="work-experience">
      <h3>{companyName}</h3>
      <p>{description}</p>
    </div>
  );
}

WorkExperience.propTypes = {
  companyName: PropTypes.string,
  description: PropTypes.string
};

export default WorkExperience;
