import { useState } from "react";

interface WinningComponentProps {
  guesses: number;
}

const WinningComponent = (props: WinningComponentProps) => {
  const { guesses } = props;

  return (
    <div className="guess-results">
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in {guesses}.
        </p>
      </div>
    </div>
  );
};

export default WinningComponent;
