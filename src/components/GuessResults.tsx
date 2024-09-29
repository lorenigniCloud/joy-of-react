import { Cell } from "./Cell";
import { GuessResultsProps } from "../interfaces/int";
import { range } from "../utils";

const GuessResults = (props: GuessResultsProps) => {
  const { items } = props;

  return (
    <div>
      {items &&
        range(0, 5).map((num) => {
          return (
            <p key={num} className="guess">
              <Cell value={items[num + 1]?.text?.[0]} position={0} />
              <Cell value={items[num + 1]?.text?.[1]} position={1} />
              <Cell value={items[num + 1]?.text?.[2]} position={2} />
              <Cell value={items[num + 1]?.text?.[3]} position={3} />
              <Cell value={items[num + 1]?.text?.[4]} position={4} />
            </p>
          );
        })}
    </div>
  );
};

export default GuessResults;
