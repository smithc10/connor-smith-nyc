import PropTypes from "prop-types";

function AboutMe({ header, firstParagraph, secondParagraph }) {
  return (
    <section id="about-me">
      <div>
        <h2 class="about-me-header">{header}</h2>
        <p class="about-me-conent">{firstParagraph}</p>
        <p class="about-me-conent">{secondParagraph}</p>
      </div>
    </section>
  );
}

AboutMe.propTypes = {
  header: PropTypes.string,
  firstParagraph: PropTypes.string,
  secondParagraph: PropTypes.string
};

export default AboutMe;
