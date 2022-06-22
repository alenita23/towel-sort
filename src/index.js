
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr;
  let result = [];
  let str;

  if(!matrix || matrix.length === 0) {
    return result;
  } else {
      for(let i = 0; i < matrix.length; i++) {
        if(i === 0 || i % 2 === 0) {
           arr = matrix[i];
           if (i === matrix.length - 1) {
             str = arr.join(', ');
           } else {
             str = arr.join(', ') + ', ';
           }
        } else {
           arr = matrix[i].reverse();
           if (i === matrix.length - 1) {
             str = arr.join(', ');
           } else {
             str = arr.join(', ') + ', ';
           }
          }
          result += str;
    }
    result = result.split(', ');
    return result;
}
};
