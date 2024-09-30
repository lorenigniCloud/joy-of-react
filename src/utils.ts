import { LetterCount, LetterInfo } from "./interfaces/int";

export const WORD = "VODKA";

const findCommonElement = (array1: number[], array2: number[]) => {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }

  return false;
};

export const countLetterRepetitions = (input: string): LetterCount => {
  const letterCounts: LetterCount = {};

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];

    if (letterCounts[letter]) {
      letterCounts[letter].count++;
      letterCounts[letter].indices.push(i);
    } else {
      letterCounts[letter] = { count: 1, indices: [i] };
    }
  }

  return letterCounts;
};

export const checkLetter = (
  letter: string,
  position: number,
  letterCoincidence?: boolean[],
  inputWord?: string,
): string => {
  if (!letter) return "";
  const wordArray = WORD.split("");
  const usedLetters = Array(WORD.length).fill(false);

  let actualReps: LetterCount = countLetterRepetitions(WORD);
  if (inputWord) {
    let inputReps: LetterCount = countLetterRepetitions(inputWord);

    // se la lettera è presente, non è nella posizione giusta e nella
    //posizione giusta c'è la lettera giusta,
    // se nelle input reps c'è l'occorrenza delle actual, e inputReps.lenght > actual.length
    if (letterCoincidence) {
      if (
        WORD.includes(letter) &&
        letterCoincidence[position] === false &&
        findCommonElement(
          inputReps[letter].indices,
          actualReps[letter].indices,
        ) &&
        inputReps[letter].indices.length > actualReps[letter].indices.length
      ) {
        return "incorrect";
      }
    }
  }
  // se la lettera è presente, non è nella posizione giusta e nella
  //posizione giusta non c'è la lettera giusta -> misplaced
  if (
    WORD.includes(letter) &&
    actualReps[letter].indices.length > 1 &&
    WORD[position] !== letter
  ) {
    return "misplaced";
  }

  // se la lettera coincide
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
