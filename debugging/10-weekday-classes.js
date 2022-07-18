/*
toString is being overloaded

Date format is incorrect in toString, so !calendar[dateStr] is evaluating to
true for everything
- Use getFullYear, not getYear.
- Pad month and day to 2 characters, with zeroes.
- Month and day are 0-indexed; add 1
- getDay returns day of week (0-6). Use getDate() for day of month.

*/

const TODAY = toDate('2018-08-05');

function toDate(string) {
  return new Date(`${string}T00:00:00`);
}

function toString(date) {
  // return `${date.getYear()}-${date.getMonth()}-${date.getDay()}`;
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    0
  )}-${String(date.getDate()).padStart(2, 0)}`;
}

function isInThePast(date) {
  return date < TODAY;
}

function isWeekday(date) {
  return date.getDay() >= 1 && date.getDay() <= 5;
}

const myCalendar = {
  '2018-08-13': ['JS debugging exercises'],
  '2018-08-14': ["Read 'Demystifying Rails'", 'Settle health insurance'],
  '2018-08-15': ["Read 'Demystifying Rails'"],
  '2018-08-16': [],
  '2018-08-30': ['Drone video project plan'],
  '2018-09-10': ['Annual servicing of race bike'],
  '2018-09-12': ['Study'],
  '2018-11-02': ['Birthday Party'],
  '2018-11-03': ['Birthday Party'],
};

const offeredClasses = {
  'Back To The Future Movie Night': ['2018-07-30'],
  'Web Security Fundamentals': ['2018-09-10', '2018-09-11'],
  'Pranayama Yoga For Beginners': ['2018-08-30', '2018-08-31', '2018-09-01'],
  "Mike's Hikes": ['2018-08-16'],
  'Gordon Ramsay Master Class': ['2018-09-11', '2018-09-12'],
  'Powerboating 101': ['2018-09-15', '2018-09-16'],
  'Discover Parachuting': ['2018-11-02'],
};

function getCompatibleEvents(classes, calendar) {
  function isAvailable(date) {
    const dateStr = toString(date);
    return !calendar[dateStr] || calendar[dateStr].length === 0;
  }

  const compatibleClasses = [];

  Object.keys(classes).forEach((className) => {
    const classDates = classes[className].map(toDate);

    if (classDates.some(isInThePast)) {
      return;
    }

    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]
