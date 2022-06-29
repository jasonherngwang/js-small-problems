/*
Rules
- Any museum w/ Computer or Science
- No museums w/ Modern Art
  - Unless they have Warhol
  - Unless they are in Amsterdam

Computer || Science || Modern+Art && (Warhol || Amsterdam)
*/

// function wantToVisit(museum, city) {
//   return (
//     museum.includes("Computer") ||             // Anything with Computer
//     (museum.includes("Science") &&             // Science cannot overlap w/ Modern Art or Amsterdam (WRONG)
//       !(                                       // Science && !(Modern+Art+Warhol || Amsterdam)
//         (museum.includes("Modern") &&
//           museum.includes("Art") &&
//           museum.includes("Andy Warhol")) ||
//         city === "Amsterdam"
//       ))
//   );
// }

function wantToVisit(museum, city) {
  return (
    museum.includes("Computer") ||
    museum.includes("Science") ||
    (museum.includes("Modern") &&
      museum.includes("Art") &&
      (museum.includes("Andy Warhol") || city === "Amsterdam"))
  );
}

// Tests (should all print 'true')

console.log(wantToVisit("Computer Games Museum", "Berlin") === true);
console.log(
  wantToVisit("National Museum of Nature and Science", "Tokyo") === true
);
console.log(wantToVisit("Museum of Modern Art", "New York") === false);
console.log(wantToVisit("El Paso Museum of Archaeology", "El Paso") === false);
console.log(wantToVisit("NEMO Science Museum", "Amsterdam") === true);
console.log(wantToVisit("National Museum of Modern Art", "Paris") === false);
console.log(
  wantToVisit("Andy Warhol Museum of Modern Art", "Medzilaborce") === true
);
console.log(wantToVisit("Moco: Modern Contemporary Art", "Amsterdam") === true);
console.log(wantToVisit("Van Gogh Museum", "Amsterdam") === false);
console.log(wantToVisit("Andy Warhol Museum", "Melbourne") === false);
