export interface Item {
  text: string;
  id: string;
  letterCoincidence: boolean[];
}

export type LetterInfo = {
  count: number;
  indices: number[];
};

export type LetterCount = { [key: string]: LetterInfo };
