import { sumConsecutiveNumbersA } from "./sumConsecutiveNumbersA"
import { sumConsecutiveNumbersB } from "./sumConsecutiveNumbersB"
import { sumConsecutiveNumbersC } from "./sumConsecutiveNumbersC"

const testLetter = 'A'

const functions = {
    A: sumConsecutiveNumbersA,
    B: sumConsecutiveNumbersB,
    C: sumConsecutiveNumbersC
}

export const sumConsecutiveNumbers = functions[testLetter]