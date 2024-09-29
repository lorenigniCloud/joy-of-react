export interface CellProps {
  value: string;
  position: number;
}

export interface GuessResultsProps {
  items: {
    text: string;
    id: string;
  }[];
}
