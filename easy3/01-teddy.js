/*
Use Math.floor instead of Math.round.
If the fractional portion of the random number was >= 0.5, it would round up.
*/

function randomBetween(min, max) {
  if (min > max) [min, max] = [max, min];
  let difference = max - min;
  let randomNumberToBeAdded = Math.floor((difference + 1) * Math.random());
  return min + randomNumberToBeAdded;
}

console.log(`Teddy is ${randomBetween(20, 200)} years old!`);
console.log(`Teddy is ${randomBetween(200, 20)} years old!`);