export const sumConsecutiveNumbersB = (countTo) => {
    let sum = 0
    for (let i = 1; i <= countTo; i++) {
        sum += i
    }
    return sum
}
