function wordSizesLettersOnly(str) {
  str = str.replace(/[^a-z ]/gi, '')
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

console.log(wordSizesLettersOnly('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizesLettersOnly('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizesLettersOnly("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizesLettersOnly(''));                                            // {}