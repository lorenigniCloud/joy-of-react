import { Fragment, useState } from "react";

import GuessResults from "./GuessResults";
import Input from "./Input";
import { Item } from "../interfaces/int";
import LooserComponent from "./LooserComponent";
import WinningComponent from "./WinningComp";
import { checkLetter } from "../utils";

interface GameProps {}

const Game = (props: GameProps) => {
  const [winner, setWinner] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([
    {
      text: "",
      id: crypto.randomUUID(),
      letterCoincidence: [false, false, false, false, false],
    },
  ]);

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

      if (check) {
        setWinner(true);
        return true;
      }
    });
    return false;
  };

  const handleSubmit = (label: string) => {
    const nextItems = [
      ...items,
      {
        text: label,
        id: crypto.randomUUID(),
        letterCoincidence: [
          checkLetter(label[0], 0) === "correct",
          checkLetter(label[1], 1) === "correct",
          checkLetter(label[2], 2) === "correct",
          checkLetter(label[3], 3) === "correct",
          checkLetter(label[4], 4) === "correct",
        ],
      },
    ];

    resultCheck(nextItems);
    setItems(nextItems);
  };

  return (
    <Fragment>
      {items.length === 6 && !winner && <LooserComponent />}
      {winner && <WinningComponent guesses={items.length - 1} />}
      <Input handleSubmit={handleSubmit} />
      <GuessResults items={items} />
    </Fragment>
  );
};

export default Game;
