// construct/finish the function that
// takes in an array of integers
// and returns the index of the lowest number
function (arr) {

}

// for loop way
function lowestIndexWithForLoop(arr) {
  let lowestNumber = arr[0];
  let lowestIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowestNumber) {
      lowestNumber = arr[i];
      lowestIndex = i;
    }
  }
  return lowestIndex;
}

// forEach way
function lowestIndexWithForEach(arr) {
  let lowestNumber = arr[0];
  let lowestIndex = 0;
  arr.forEach((num, i) => {
    if (num < lowestNumber) {
      lowestNumber = num;
      lowestIndex = i;
    }
  })
  return lowestIndex;
}

// reduce way (one line!)
const lowestIndexWithReduce = arr => arr.reduce((acc, curr, i) => {
    if (curr < acc.num) {
      acc.num = curr;
      acc.index = i;
      return acc
    }
    return acc
  }, {num: arr[0], index: 0}).index
