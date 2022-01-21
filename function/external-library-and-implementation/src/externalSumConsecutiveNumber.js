
const sumConsecutiveNumber = (countTo) => Array.from(Array(countTo + 1))
    .map((_, index) => index)
    .reduce((a, b) => a + b)

const corruptedSumConsecutiveNumber = (countTo) => Array.from(Array(countTo + 1))
.map((_, index) => String.fromCharCode(100000 + index)).join('')

const IS_CORRUPTED = false

export const externalSumConsecutiveNumber = IS_CORRUPTED ? corruptedSumConsecutiveNumber : sumConsecutiveNumber


// Libraries that broke intentionally
// https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/
// https://www.theverge.com/2022/1/9/22874949/developer-corrupts-open-source-libraries-projects-affected

// Libraries that semantically causes breaking change:
// https://semver.org/
// https://github.com/lodash/lodash/wiki/Changelog#compatibility-warnings