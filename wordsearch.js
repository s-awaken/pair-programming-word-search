const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const veritcalCol = transpose(letters);
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (const v of veritcalCol) {
    if (v.join('').includes(word)) return true;
  }
  return false;

};

const transpose = function(matrix) {
  const copy = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        if (!copy[j]) {
          copy[j] = [];
        }
        copy[j][i] = matrix[i][j];
      }
    }
  }
  return copy;
};
  
module.exports = {wordSearch};