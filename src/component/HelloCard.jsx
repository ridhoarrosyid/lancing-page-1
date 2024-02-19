import Button from "./Button";
import PropTypes from "prop-types";

export default function HelloCard({ h1, p, textTombol }) {
  return (
    <div className="w-96">
      <h1 className="text-5xl font-semibold text-neutral-100 text-balance leading-normal mb-8">
        {h1}
      </h1>
      <p className="text-neutral-500 text-balance tracking-wide mb-16">{p}</p>
      <Button bg={"bg-yellow-300"} text={textTombol} color="" />
    </div>
  );
}

HelloCard.propTypes = {
  h1: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  textTombol: PropTypes.string.isRequired,
};
