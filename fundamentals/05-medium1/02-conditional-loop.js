let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);  // Doesn't increment in this branch, it will get stuck here.
  } else {
    i += 1;
  }
}
/*
Output
0
0
0
0
0
...forever
*/