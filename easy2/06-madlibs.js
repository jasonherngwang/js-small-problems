const rlSync = require("readline-sync");

const noun = rlSync.question("Noun: ");
const verb = rlSync.question("Verb: ");
const adjective = rlSync.question("Adjective: ");
const adverb = rlSync.question("Adverb: ");

console.log(
  `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`
);
