import PropTypes from "prop-types";

function TechnicalSkills({
  header,
  firstListItem,
  firstListContent,
  secondListItem,
  secondListContent
}) {
  return (
    <div>
      <h2 id="technical-skills-header">{header}</h2>
      <ul class="technical-skills-list">
        <li>
          <b>{firstListItem}</b>
          {firstListContent}
        </li>
        <li>
          <b>{secondListItem}</b>
          {secondListContent}
        </li>
      </ul>
    </div>
  );
}

TechnicalSkills.propTypes = {
  header: PropTypes.string,
  firstListItem: PropTypes.string,
  firstListContent: PropTypes.string,
  secondListItem: PropTypes.string,
  secondListContent: PropTypes.string
};

export default TechnicalSkills;
