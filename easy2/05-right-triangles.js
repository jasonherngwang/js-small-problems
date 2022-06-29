/*
Algo
- Iterate from 1 to n
- Left pad each row with spaces

*/

const triangle = (n) => {
  for (let i = 1; i <= n; i += 1) {
    console.log("*".repeat(i).padStart(n, " "));
  }
};

triangle(1);
triangle(5);
triangle(9);
