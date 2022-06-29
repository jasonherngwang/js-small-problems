const totalPages = 364;
let energy = 100;

let currentPage = 1;
function read() {
  // let currentPage = 1;

  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= 5 + currentPage * 0.1;
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read(); // Calling read resets currentPage to 1. Need to declare and initialize currentPage outside the function.
  } else {
    console.log("Done!");
  }
}

read();
