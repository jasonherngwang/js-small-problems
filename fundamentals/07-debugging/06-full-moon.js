const species = ["wolf", "human", "wasp", "squirrel", "weasel", "dinosaur"];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === "w";
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  // var newSpecies; // No enclosing function, so this is global scoped
  let newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies); // No else clause to reset newSpecies to '' or undefined. Or, use let instead of var.
  }

  if (newSpecies) {
    // "werewolf" persists as a truthy value when "human" is evaluated.
    console.log(`Beware of the ${newSpecies}!`);
  }
}
