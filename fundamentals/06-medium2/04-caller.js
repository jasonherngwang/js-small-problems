function doubler(number, caller) {
  console.log(`This function was called by ${caller}.`);
  return number + number;
}

console.log(doubler(5, "Victor")); // returns 10
// logs:
// This function was called by Victor.

function makeDoubler(caller) {
  return (number) => {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  };
}

const doubler2 = makeDoubler("Victor");
console.log(doubler2(5)); // returns 10
// logs:
// This function was called by Victor.
