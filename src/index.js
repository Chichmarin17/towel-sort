
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  for (i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      for (j = 0; j < matrix[i].length; j++) {
        newArr.push(matrix[i][j]);
      }
    } else {
      for (j = matrix[i].lenth - 1; j >= 0; j--) {
        newArr.push(matrix[i][j]);
      }
    }
  }
  return newArr;
}
