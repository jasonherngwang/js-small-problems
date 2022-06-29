/*
We can use the number of minutes before or after midnight to represent the time of day. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

The timeOfDay function shown below takes a time argument using this minute-based format, and returns the time of day in 24-hour format ("hh:mm"). Reimplement the function using JavaScript's Date object.

Input: 1 integer, representing minutes after midnight (positive) or before midnight (negative)
Output: String representation of time, in "hh:mm" format

Requirements
- Must use Date built-in object

MDN docs: If a parameter you specify is outside of the expected range, setMinutes() attempts to update the date information in the Date object accordingly.

Algo
- Create a new Date object for the current datetime.
- Set the hours to 0 and minutes to the number input.
  - JS will automatically advance or rewind datetime if the minutes input is out-of-range (0-59).
- Extract the hour and minute
- Return time in a padded string
*/
function timeOfDay(minutes) {
  let now = new Date();
  now.setHours(0, minutes);
  const hoursStr = String(now.getHours()).padStart(2, "0");
  const minutesStr = String(now.getMinutes()).padStart(2, "0");
  return `${hoursStr}:${minutesStr}`;
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"