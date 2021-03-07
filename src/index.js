
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return []

    return matrix.reduce((accumulator, value, index) => {
        if (index % 2 == 0) accumulator.push(...value)
        else accumulator.push(...value.reverse())
        return accumulator
    }, [])
}

