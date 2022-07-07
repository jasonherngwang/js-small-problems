/*
Problem
------------------------------------------
Write a function that takes a year as an argument and returns the number of
'Friday the 13ths' in that year. You may assume that the year is greater than
1752 (when the modern Gregorian Calendar was adopted by the United Kingdom).
You may also assume that the same calendar will remain in use for the
foreseeable future.

Inputs: 1 integer, a year
- Will be >1752
Outputs: 1 integer, the number of Friday the 13ths in that year

Rules, Requirements, Definitions
- "Friday the 13th" means any day in the year that is the weekday Friday and
  the 13th day of the month.
- A year has 365 days, except for leap years which have 366.
  - Must account for leap years in the solution.

Clarifying Questions
-

Edge Cases
-


Examples, Test Cases
------------------------------------------
fridayThe13ths(2017);      // 2
- 1/13/17
- 10/13/17

Data Structure
------------------------------------------
Use an array to hold Date objects.

Algorithm
------------------------------------------
- Create an array to hold 12 Date objects: the 13th of each month of the given
  year.
- Transform these objects into weekday strings.
- Filter to Fridays.
- Return array length.

*/

'use strict';

function fridayThe13ths(year) {
  let thirteenths = [...Array(12)].map((_, index) => new Date(year, index, 13));
  let fridaysThirteenths = thirteenths.filter((date) => date.getDay() === 5);
  return fridaysThirteenths.length;
}

console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2
