import { CellProps } from "../interfaces/int";
import { checkLetter } from "../utils";

export const Cell = (props: CellProps) => {
  const { value, position } = props;
  // console.log(value, "render");
  return (
    <span className={`cell ${checkLetter(value, position)}`}>{value}</span>
  );
};
