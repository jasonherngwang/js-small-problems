const age = parseInt(prompt('What is your age? '), 10);
const retireAge = parseInt(prompt('At what age would you like to retire? '), 10);

const today = new Date;
const currentYear = today.getFullYear();
const yearsUntilRetirement = (retireAge - age);
const retirementYear = currentYear + yearsUntilRetirement;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}`);
console.log(`You have only ${yearsUntilRetirement} years of work to go!`);

