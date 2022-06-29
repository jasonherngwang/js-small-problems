// pad to 3 chars
function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1:  return `  ${stringNumber}`;
    case 2:  return ` ${stringNumber}`;
    default: return stringNumber;
  }
}

for (let i = 1; i < 10; i += 1) {      // 1-9
  let row = '';
  for (let j = 1; j <= 10; j += 1) {   // 1-10
    row += `${padLeft(i * j)} `;       // pad to 4 spaces
  }

  console.log(row);
}

/*
  1   2   3   4   5 ... 10
  2                     20
...
  9  18  27         ... 90

Table is just missing a row for 10.
*/