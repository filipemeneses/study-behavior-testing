# Implementation vs Behavior - external library

## Understanding the study

- `UsingButton.vue`

This would be a developer implementation using the "external" library component called `Button`

- `Button.vue`

Is a button that either uses `ButtonA.vue` or `ButtonB.vue`

- `ButtonA.vue`

This would mimic the first version of a component. It emits `click` and has `role="button"`

- `ButtonB.vue`

This would mimic the second version of a component. It emits `myClick` and has `role="button"`

- `ButtonC.vue`

This would mimic the third version of a component. It emits `click` and has `role="changedrole"`

- `UsingButtonVueUtilsImplementation.spec.js`

Contains implementation testing mocking an "external" library component emit event and finding component with `findComponent`, it's simulating (not mimicking) an user clicking the button

- `UsingButtonVueUtilsBehavior.spec.js`

Contains implementation testing mocking an "external" library component by firing and event and finding component with it's `role`, it's mimicking an user clicking the button

- `UsingButtonTestingLibrary.spec.js`

Same as `UsingButtonVueUtilsBehavior.spec.js` but using `testing-library`

## Steps

- Run all tests with `ButtonA.vue` in `Button.vue`
- Run all tests with `ButtonB.vue` in `Button.vue`
  - Tests must **fail**, but `UsingButtonVueUtilsImplementation.spec` **doesn't fail**
- Run all tests with `ButtonC.vue` in `Button.vue`
  - Tests must **fail**, but `UsingButtonVueUtilsImplementation.spec` **doesn't fail**
