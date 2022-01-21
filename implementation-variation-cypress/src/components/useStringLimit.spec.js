import {useStringLimit} from "./useStringLimit"

describe.skip("useStringLimit", () => {
  describe("for number < 1", () => {
    it("must return function", () => {
        expect(useStringLimit(0)).toBeInstanceOf(Function)
    });
    it("must not apply limit", () => {
        expect(useStringLimit(0)('12345')).toEqual('12345')
    });
  });
  describe("for number > 0", () => {
    it("must return function", () => {
        expect(useStringLimit(3)).toBeInstanceOf(Function)
    });
    it("must apply limit", () => {
        expect(useStringLimit(1)('12345')).toEqual('1')
        expect(useStringLimit(2)('12345')).toEqual('12')
        expect(useStringLimit(3)('12345')).toEqual('123')
    });
  });
  describe('for non-number', () => {
    it('must ignore', () => {
        expect(useStringLimit()('12345')).toEqual('12345')
        expect(useStringLimit(null)('12345')).toEqual('12345')
        expect(useStringLimit('undefined')('12345')).toEqual('12345')
        expect(useStringLimit(NaN)('12345')).toEqual('12345')
        expect(useStringLimit({})('12345')).toEqual('12345')
        expect(useStringLimit([])('12345')).toEqual('12345')
        expect(useStringLimit(Infinity)('12345')).toEqual('12345')
        expect(useStringLimit(-Infinity)('12345')).toEqual('12345')
    });
  });
});
