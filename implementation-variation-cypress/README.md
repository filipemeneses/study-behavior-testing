# Implementation vs Behavior - implementation variation - cypress

## Understanding the study

- `Input.vue`

It's a `input` that can limit characters typed

## Steps

- Run all tests with `InputA.vue` in `Input.vue`
  - Tests must **pass** on **Chrome**
  - Tests must **fail** on **Edge**, unfortunately Cypress `type` bypasses `maxlength` attribute
- Run all tests with `InputB.vue` in `Input.vue`
  - Tests must **pass** on **Chrome**
  - Tests must **pass** on **Edge**