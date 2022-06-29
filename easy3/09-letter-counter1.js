function wordSizes(str) {
  if (str.trim() === '') return {};
  
  let words = str.split(' ')
  let wordLengths = words.map(word => word.length);
  let counts = {};
  
  for (let length of wordLengths) {
    if (!(length in counts)) {
      counts[length] = 0;
    }
    counts[length] += 1;
  }
  
  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}