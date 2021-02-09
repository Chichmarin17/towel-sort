
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      newArr.push(matrix[i][j]);
    }
  }
  return newArr;
}
