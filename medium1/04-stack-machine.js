/*
Problem
------------------------------------------
Write a function simulating a stack machine that takes a program and outputs the
result of running the program. A stack machine uses a stack and register.

Definitions
- "Stack": A Last-In-First-Out list of items
  - Initial value: []
- "Register": A holding location for a value. Its value may be used in
  computations.
  - Initial value: 0
- "Command", "operation", "token": An operation involving the stack and/or
  register
  - All operations are integer operations
- "Program": A series of commands to be provided to the stack machine.

Inputs: 1 string, the program containing commands

Outputs: May log 0 or more numbers to the console. These numbers are the results
of executing commands.

Rules, Requirements, Definitions
Commands
- n : Place a value, n, in the register. Do not modify the stack.
- PUSH : Push the register value onto the stack. Leave the value in the
  register.
- ADD : Pop a value from the stack and add it to the register value, storing the
  result in the register.
- SUB : Pop a value from the stack and subtract it from the register value,
  storing the result in the register.
- MULT : Pop a value from the stack and multiply it by the register value,
  storing the result in the register.
- DIV : Pop a value from the stack and divide the register value by the popped
  stack value, storing the integer result back in the register.
- REMAINDER : Pop a value from the stack and divide the register value by the
  popped stack value, storing the integer remainder of the division back in the
  register.
- POP : Remove the topmost item from the stack and place it in the register.
- PRINT : Print the register value.

Assumptions
- Programs will be valid

Clarifying Questions
-


Examples, Test Cases, Edge Cases
------------------------------------------
'5 PUSH 3 MULT PRINT'
Initial values:
- stack: []
- register: 0
1. n = 5. Place 5 in register
- stack: []
- register: 5
2. PUSH. Copy 5 from register to stack
- stack: [5]
- register: 5
3. n = 3. Place 3 in register
- stack: [5]
- register: 3
4. MULT. Pop 5 from stack. Multiply by 3 to get 15. Store 15 in register.
- stack: []
- register: 15
5. PRINT. Print 15 stored in register
- stack: []
- register: 15
- log to console: 15

Data Structure
------------------------------------------
Use array to hold commands.
Use conditional statement to match with and execute command type.

Algorithm
------------------------------------------
- Initialize stack to [], register to 0.
- Split program (by space) into array of commands.
- Iterate over commands
  - Use switch statement to match command. Default branch is for `n`.
*/

'use strict';

const VALID_COMMANDS = [
  'PUSH',
  'ADD',
  'SUB',
  'MULT',
  'DIV',
  'REMAINDER',
  'POP',
  'PRINT',
];

const STACK_COMMANDS = ['ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER', 'POP'];

function isValidCommand(command) {
  if (VALID_COMMANDS.includes(command) || /[0-9]+/.test(command)) return true;
  return false;
}

function minilang1(program) {
  let stack = [];
  let register = 0;
  let commands = program.split(' ');

  for (let i = 0; i < commands.length; i += 1) {
    let command = commands[i];
    if (!isValidCommand(command)) {
      console.log('Invalid command.');
      return;
    }
    if (STACK_COMMANDS.includes(command) && stack.length === 0) {
      console.log('Stack is empty.');
      return;
    }

    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register = Math.floor(register % stack.pop());
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(command);
    }
  }
}

function minilang(program) {
  const stack = [];
  let register = 0;
  const commands = program.split(' ');

  const operations = {
    push() {
      stack.push(register);
    },
    add() {
      register += stack.pop();
    },
    sub() {
      register -= stack.pop();
    },
    mult() {
      register *= stack.pop();
    },
    div() {
      register = Math.floor(register / stack.pop());
    },
    remainder() {
      register %= stack.pop();
    },
    pop() {
      register = stack.pop();
    },
    print() {
      console.log(register);
    },
  };

  for (let i = 0; i < commands.length; i += 1) {
    let command = commands[i];

    if (Object.keys(operations).includes(command.toLowerCase())) {
      if (STACK_COMMANDS.includes(command) && stack.length === 0) {
        console.log('Stack empty');
        return 'Stack empty';
      }
      operations[command.toLowerCase()]();
    } else if (/^-?\d+$/.test(command)) {
      register = parseInt(command, 10);
    } else {
      console.log('Invalid command');
      return 'Invalid command';
    }
  }
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

// Error handling
minilang('7 ATE 9'); // Invalid command. 'ATE' is invalid.
minilang('POP'); // Empty stack
