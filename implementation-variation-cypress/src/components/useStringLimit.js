const isNumber = number => !isNaN(number) && typeof number === 'number'

export const useStringLimit = (limit = 0) => (str) => {
    if (!isNumber(limit)) return str

    if (!str || limit < 1) {
        return str
    }

    return Array.from(str).slice(0, limit).join('')
}