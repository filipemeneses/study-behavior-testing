import Button from "./Button.vue";
import UsingButton from "./UsingButton.vue";
import { mount } from "@vue/test-utils";

describe("UsingButton", () => {
  describe("for button click", () => {
    it("must emit `usingButtonClick`", async () => {
      const wrapper = await mount(UsingButton);

      // using role query will help with acessibility
      const button = wrapper.find('[role="button"]')

      // vue utils can also trigger click
      button.trigger('click')
      expect(wrapper.emitted().usingButtonClick[0]).toEqual([1]);
    });
  });
});
