import Button from "./Button.vue";
import UsingButton from "./UsingButton.vue";
import { mount } from "@vue/test-utils";

describe("UsingButton", () => {
  describe("for Button component `click` emit", () => {
    it("must emit `usingButtonClick`", async () => {
      const wrapper = await mount(UsingButton);

      // using `findComponent` might
      // bypass testing some changes
      const button = wrapper.findComponent(Button)

      // testing $emit might bypass testing some changes
      button.vm.$emit('click', 1)
      expect(wrapper.emitted().usingButtonClick).toEqual([[1]]);
    });
  });
});
