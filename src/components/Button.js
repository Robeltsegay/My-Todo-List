import PropTypes from "prop-types";
const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={onClick}
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};
Button.defaultProps = {
  color: "steelblue",
  text: "Button default text",
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
