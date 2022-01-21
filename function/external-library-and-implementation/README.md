# Implementation vs Behavior - external library

## Understanding the study

The goal is to find implementation testing pitfalls

- Testing output help write less tests, testing implementation will require test rewrite
- External libraries can't be trusted

- `sumConsecutiveNumbers`

Exports either one of these versions

| Version | Implementation     | Expected test results if implementation changes |
| ------- | ------------------ | ----------------------------------------------- |
| A       | "External library" | ✅                                               |
| B       | For loop           | ✅                                               |
| C       | Math formula       | ✅                                               |

- `externalSumConsecutiveNumber.js`

To mimic external library


## Steps

- Run all tests with `A` in `sumConsecutiveNumbers.js`
  - Tests will **pass**
- Corrupt `externalSumConsecutiveNumber.js`
  - Implementation test will **pass** but **shouldn't**
  - Behavior test will **fail** and **it must**
- Revert corruption and run tests with `B` implementation in `sumConsecutiveNumbers.js`
  - Implementation test will **fail** but **shouldn't**
  - Behavior test will **pass** and **it must**
- Run tests with `C` implementation in `sumConsecutiveNumbers.js`
  - Implementation test will **fail** but **shouldn't**
  - Behavior test will **pass** and **it must**