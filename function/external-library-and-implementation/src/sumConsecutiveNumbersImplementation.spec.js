import { sumConsecutiveNumbers } from "./sumConsecutiveNumbers";

const mockExternalSumConsecutiveNumber = jest.fn(() => 6)

jest.mock("./externalSumConsecutiveNumber", () => ({
    externalSumConsecutiveNumber: (a) => mockExternalSumConsecutiveNumber(a)
}))

describe('sumConsecutiveNumbers', () => {
    describe('for number > 3', () => {
        it('must sum numbers until 3', () => {
            mockExternalSumConsecutiveNumber.mockImplementation(() => 6)

            // this is "behavior" testing, given input, expect output
            // in UI, given user typing and clicking, expect DOM and visual changes
            // (if given any UI framework, expect component events or side-effects in global state)
            expect(sumConsecutiveNumbers(3)).toEqual(6)

            expect(mockExternalSumConsecutiveNumber).toBeCalledWith(3)
        });
    });
});