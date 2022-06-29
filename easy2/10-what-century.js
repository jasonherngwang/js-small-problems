/* 
Algo
- Find century
  - Find quotient, as century
  - Find remainder
  - If remainder > 0, increment century by 1
- Find suffix
  - If last 2 digits are 11, 12, or 13, return 'th'
  - If last digit is 1, return 'st'
  - If last digit is 2, return 'nd'
  - If last digit is 3, return 'rd'
  - Return 'th'
1st
2nd
3rd
4th
..
11th
12th
13th
...
21st
22nd
23rd
...
*/

const numSuffix = (num) => {
  const lastDigits = num % 100;
  if ([11, 12, 13].includes(lastDigits)) return "th";

  const lastDigit = lastDigits % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const century = (year) => {
  let century = Math.floor(year / 100);
  const remainder = year % 100;
  if (remainder) century += 1;
  return `${century}${numSuffix(century)}`;
};

console.log(century(2000)); // "20th"
console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"
