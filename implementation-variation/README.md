# Implementation vs Behavior - implementation variation

## Understanding the study

- `Input.vue`

It's a `input` that can limit characters typed. Exports either `InputA.vue` or `InputB.vue`

| Component    | Implements using     | If implementation changes expected test result is |
| ------------ | -------------------- | ------------------------------------------------- |
| `InputA.vue` | `maxlength`          | ✅                                                 |
| `InputB.vue` | `String.substring()` | ✅                                                 |


- `InputVueUtilsImplementation.spec.spec.js`

Contains implementation testing if `maxlength` exists and emits model value substring. **vue-utils is unable to test model value emmit**

- `UsingInputVueUtilsBehavior.spec.js`

Contains **an attempt of** implementation testing if given user typed events then will emit model value substring. **vue-utils is unable to work with `maxlength`**

- `UsingInputTestingLibrary.spec.js`

Contains implementation testing if given user typed events then will emit model value substring.

## Steps

- Run all tests with `InputA.vue` in `Input.vue`
  - `vue-utils` tests will **fail**
  - Comment `update:modelValue` on `vue-utils` tests, now all tests will **pass**
- Run all tests with `InputB.vue` in `Input.vue`
  - Comment `update:modelValue` on `vue-utils` tests, now all tests must **pass**