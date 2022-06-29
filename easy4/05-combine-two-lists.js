/*
Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.


*/

const interleave = function interleave(...arrays) {
  const result = [];
  const longestArrayLength = Math.max(...arrays.map(array => array.length));
  for (let i = 0; i < longestArrayLength; i += 1) {
    arrays.forEach(array => {
      if (array[i]) result.push(array[i]);
    })
  }
  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
console.log(interleave([1, 2, 3], ['a', 'b', 'c'], [100, 101, 102]));
console.log(interleave([1, 2, 3], ['a', 'b', 'c'], [100, 101]));

const interleaveV2 = function interleaveV2(array1, array2) {
  return array1.map((element, index) => [element, array2[index]]).flat()
}

console.log(interleaveV2([1, 2, 3], ['a', 'b', 'c']));

const interleaveV3 = function interleaveV3(array1, array2) {
  return array1.reduce((array, element, index) => {
    array.push(element, array2[index]);
    return array;
  }, [])
}

console.log(interleaveV3([1, 2, 3], ['a', 'b', 'c']));