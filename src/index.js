
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return []
  let result = matrix.reduce((acc, elem, i) => {
    if (i % 2 === 0) acc.push(...elem)
    else acc.push(...elem.reverse())
    return acc
  }, [])
  return result;
}
