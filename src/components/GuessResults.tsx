import { Cell } from "./Cell";
import { Item } from "../interfaces/int";
import { range } from "../utils";

interface GuessResultsProps {
  items: Item[];
}

const GuessResults = (props: GuessResultsProps) => {
  const { items } = props;
  // console.log(items);

  return (
    <div>
      {items &&
        range(0, 5).map((num) => {
          return (
            <p key={num} className="guess">
              <Cell
                value={items[num + 1]?.text?.[0]}
                position={0}
                word={items[items.length - 1].text}
                row={num}
                items={items}
              />
              <Cell
                value={items[num + 1]?.text?.[1]}
                position={1}
                word={items[items.length - 1].text}
                row={num}
                items={items}
              />
              <Cell
                value={items[num + 1]?.text?.[2]}
                position={2}
                word={items[items.length - 1].text}
                row={num}
                items={items}
              />
              <Cell
                value={items[num + 1]?.text?.[3]}
                position={3}
                word={items[items.length - 1].text}
                row={num}
                items={items}
              />
              <Cell
                value={items[num + 1]?.text?.[4]}
                position={4}
                word={items[items.length - 1].text}
                row={num}
                items={items}
              />
            </p>
          );
        })}
    </div>
  );
};

export default GuessResults;
