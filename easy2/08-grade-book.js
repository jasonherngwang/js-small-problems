function letterGrade(numGrade) {
  if (numGrade >= 90) return "A";
  if (numGrade >= 80) return "B";
  if (numGrade >= 70) return "C";
  if (numGrade >= 60) return "D";
  return "F";
}

function getGrade(...grades) {
  const average = grades.reduce((a, b) => a + b) / grades.length;
  return letterGrade(average);
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));
console.log(getGrade(70, 88, 72));
