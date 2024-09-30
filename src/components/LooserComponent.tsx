import { WORD } from "../utils";

const LoosingComponent = () => {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{WORD.toString()}</strong>.
      </p>
    </div>
  );
};

export default LoosingComponent;
