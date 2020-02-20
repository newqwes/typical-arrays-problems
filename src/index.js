
exports.min = function min (array) {
  if (array == undefined) return 0;
  if (array.length > 0) return Math.min(...array) // spred operator
  else return 0;
}

exports.max = function max (array) {
  if (array == undefined) return 0;
  if (array.length > 0) return Math.max(...array)
  else return 0;
}

exports.avg = function avg (array) {
  if (array == undefined) return 0;
  if (array.length > 0) return array.reduce((acc, item) => acc + item) / array.length; //reduce (accumulator, currentValue) => accumulator + currentValue;
  else return 0;
}