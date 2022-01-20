import Input from "./Input.vue";
import { mount } from "@vue/test-utils";

describe("Input", () => {
  describe("for `limit` === 0", () => {
    it("must not apply any limits", async () => {
      const wrapper = await mount(Input);
      const input = wrapper.find('[role="textbox"]')

      input.setValue('1234567')

      await wrapper.vm.$nextTick()
      
      expect(wrapper.emitted("update:modelValue")).toEqual([["1234567"]])
    });
  });
  describe("for `limit` > 0", () => {
    it("must apply limits", async () => {
      const wrapper = await mount(Input, {
        props: {
          limit: 3
        }
      });
      const input = wrapper.find('[role="textbox"]')

      // vue-utils cant simulate typing with `maxlength` implementation
      // or JSDOM didnt implement `maxlength` simulation correctly
      // cant be considered a behavior testing
       input.setValue('12345')
       input.trigger('change')

      await wrapper.vm.$nextTick()
      
      // vue-utils cant simulate typing with `maxlength` implementation
      // or JSDOM didnt implement `maxlength` simulation correctly
      // can't be tested with these tools
      // the output should be `"123"`
      expect(wrapper.emitted()["update:modelValue"]).toEqual([["123"]])
    });
  });
});
