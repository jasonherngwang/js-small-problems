// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

function tally(array) {
  let counts = {};
  for (let elem of array) {
    if (counts[elem]) {
      counts[elem] += 1;
    } else {
      counts[elem] = 1;
    }
  }
  return counts;
}

function countOccurrences(array) {
  let counts = tally(array);
  for (let key of Object.keys(counts)) {
    console.log(`${key} => ${counts[key]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2