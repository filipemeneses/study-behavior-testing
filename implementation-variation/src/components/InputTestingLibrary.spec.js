import Input from "./Input.vue";
import { ref } from "vue"
import {render, fireEvent} from '@testing-library/vue'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

const setup = async (props = {}) => {
  const {getByRole, emitted, html} = await render(Input, {
    props: {
      ...props
    }
  });

  return {
    textbox: getByRole('textbox'),
    emitted,
    html
  }
}

describe("Input", () => {
  describe.skip("for `limit` === 0", () => {
    it("must not apply any limits", async () => {
      const {textbox, emitted} = await setup();

      await userEvent.type(textbox, '123456789ABCDEF')

      expect(textbox).toHaveValue('123456789ABCDEF');
      expect(emitted()['update:modelValue']).toEqual([
        ["1"],
        ["12"],
        ["123"],
        ["1234"],
        ["12345"],
        ["123456"],
        ["1234567"],
        ["12345678"],
        ["123456789"],
        ["123456789A"],
        ["123456789AB"],
        ["123456789ABC"],
        ["123456789ABCD"],
        ["123456789ABCDE"],
        ["123456789ABCDEF"]
      ])
    });
  });
  describe("for `limit` > 0", () => {
    it("must apply limits", async () => {
      const {textbox, emitted} = await setup({
        limit: 3
      });

      await userEvent.type(textbox, '12345')

      expect(textbox).toHaveValue('123');
      expect(emitted()['update:modelValue']).toEqual([
        ["1"],
        ["12"],
        ["123"]
      ])
    });
  });
});
