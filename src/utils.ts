const WORD = "CORTA";

export const checkLetter = (letter: string, position: number): string => {
  if (!letter) return "";

  const wordArray = WORD.split("");
  const usedLetters = Array(WORD.length).fill(false);

  if (wordArray[position] === letter) {
    return "correct";
  }

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === letter && !usedLetters[i]) {
      return "misplaced";
    }
  }

  return "incorrect";
};

export const range = (start: number, end: number, step = 1) => {
  let output = [];

  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};
