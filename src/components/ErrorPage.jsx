import PropTypes from "prop-types";

export default function ErrorPage({ error }) {
  return (
    <div id="error-page">
      <p class="error-text">{error}</p>
    </div>
  );
}

ErrorPage.propTypes = {
  error: PropTypes.string
};

ErrorPage.defaultValues = {
  error: "TESTING"
};
