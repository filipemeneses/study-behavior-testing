import Input from "./Input.vue";
import { ref } from "vue"
import { mount } from '@cypress/vue'
import '@testing-library/cypress/add-commands'

describe("Input", () => {
  describe("for `limit` === 0", () => {
    it("must not apply any limits", async () => {
      await mount(Input)

      const textbox = cy.findByRole('textbox')

      await textbox.should('exist')

      await textbox.type('123456789ABCDEF')

      await textbox.should('have.value', '123456789ABCDEF');

      expect(Cypress.vueWrapper.emitted()['update:modelValue']).to.deep.eq([
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
      await mount(Input, {
        props: {
          limit: 3
        }
      })

      const textbox = cy.findByRole('textbox')

      await textbox.should('exist')

      await textbox.type('12345')

      await textbox.should('have.value', '123')

      expect(Cypress.vueWrapper.emitted()['update:modelValue']).to.deep.eq([
        ["1"],
        ["12"],
        ["123"]
      ])
    })
    describe('for non-BMP characters', () => {
      it("must apply limits", async () => {
        await mount(Input, {
          props: {
            limit: 1
          }
        })

        const textbox = cy.findByRole('textbox')

        await textbox.should('exist')

        await textbox.type("😂")

        // still cant test maxlength properly 🥲
        // because Edge can't understand 1 character emoji
        // and cypress somehow can type the full emoji
        await textbox.should('have.value', '😂')

        expect(Cypress.vueWrapper.emitted()['update:modelValue']).to.deep.eq([
          ["😂"]
        ])
      })
    });
  })
})
