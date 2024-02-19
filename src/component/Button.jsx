import PropTypes from "prop-types";

export default function Button({ text, bg, color }) {
  return (
    <button
      className={`first-letter:uppercase w-36 h-10 ${bg} rounded-xl ${color}`}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
