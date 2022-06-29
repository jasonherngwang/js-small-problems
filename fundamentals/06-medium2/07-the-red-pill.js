function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) { // rest parameter
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]); // ASCII code integer => single character
    }

    log(result); // Variable `log` referencing function `log` is in the closure of function `anotherOne`.
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101)); // Logs 'Welcome'
    anotherOne(116, 111); // Logs 'to'
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101); // Logs 'the'
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33); // 'Matrix!'

/*
Function call one()
Outputs:
Welcome
to
the
Function call of anotherOne()
Outputs:
Matrix!


*/