import UsingButton from "./UsingButton.vue";
import {render, fireEvent} from '@testing-library/vue'

describe("UsingButton", () => {
  describe("for button click", () => {
    it("must emit `usingButtonClick`", async () => {
      const {getByRole, emitted} = render(UsingButton);

      await fireEvent.click(
        getByRole('button')
      )

      expect(emitted().usingButtonClick[0]).toEqual([1]);
    });
  });
});
