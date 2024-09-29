import React, { Fragment, useState } from "react";

import GuessResults from "./GuessResults";
import Input from "./Input";
import WinningComponent from "./WinningComp";
import { checkLetter } from "../utils";

interface GameProps {}

const Game = (props: GameProps) => {
  const [winner, setWinner] = useState<boolean>(false);
  const [items, setItems] = useState<
    {
      text: string;
      id: string;
    }[]
  >([{ text: "", id: crypto.randomUUID() }]);

  const resultCheck = (
    obs: {
      text: string;
      id: string;
    }[],
  ) => {
    obs.forEach((element) => {
      let check: string | boolean =
        checkLetter(element.text[0], 0) === "correct" &&
        checkLetter(element.text[1], 1) === "correct" &&
        checkLetter(element.text[2], 2) === "correct" &&
        checkLetter(element.text[3], 3) === "correct" &&
        checkLetter(element.text[4], 4);

      console.log(check);

      if (check) {
        setWinner(true);
        return true;
      }
    });
    return false;
  };

  const handleSubmit = (label: string) => {
    const nextItems = [...items, { text: label, id: crypto.randomUUID() }];
    resultCheck(nextItems);
    setItems(nextItems);
  };

  return (
    <Fragment>
      {winner && <WinningComponent guesses={items.length - 1} />}
      <Input handleSubmit={handleSubmit} />
      <GuessResults items={items} />
    </Fragment>
  );
};

export default Game;
