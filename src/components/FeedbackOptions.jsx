import PropTypes from "prop-types";

const FeedbackOptions = ({ options }) => {
  return (
    <>
      <button onClick={options.counterG}>Good</button>
      <button onClick={options.counterN}>Neutral</button>
      <button onClick={options.counterB}>Baaaad</button>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
};

export default FeedbackOptions;
