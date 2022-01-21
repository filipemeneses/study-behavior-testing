import { sumConsecutiveNumbers } from "./sumConsecutiveNumbers";

describe('sumConsecutiveNumbers', () => {
    describe('for number > 3', () => {
        it('must sum numbers until 3', () => {
            expect(sumConsecutiveNumbers(3)).toEqual(6)
        });
    });
});