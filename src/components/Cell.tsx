import { Item, LetterCount, LetterInfo } from "../interfaces/int";
import { WORD, checkLetter, countLetterRepetitions } from "../utils";

interface CellProps {
  value: string;
  position: number;
  word: string;
  row: number;
  items: Item[];
}
export const Cell = (props: CellProps) => {
  const { value, position, row, items } = props;

  return (
    <span
      className={`cell ${checkLetter(
        value,
        position,
        items[row + 1]?.letterCoincidence,
        items[row + 1]?.text,
      )}`}
    >
      {value}
    </span>
  );
};
