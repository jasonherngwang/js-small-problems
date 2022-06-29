/*
From within a function or block, we can access variables in the same or outer scope.
Inside `logger`, when the identifier `status` is reference, JS first looks inside the function scope and does not find it. It then moves up the hierarchy of nested scope and finds `logger` in the function scope of `debugIt`.
*/

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();