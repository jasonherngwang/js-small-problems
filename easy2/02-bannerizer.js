/*
Algo
- Create horizontal bar
- Create empty line
- Pad string with space and pipe
- Create empty line
- Create horizontal bar

Algo: With Word Wrap and Max Window Width
- Initialize max width to max window width - 4
- Initialize empty array to hold lines.
- Split input string into array of words.
- While array is not empty
  - Initialize empty string, to represent 1 line of text.
  - If the line + 1 space + the length of the word is smaller than max width
    - Append the word to the line of text
  - If not
    - Add the current line to the line array
    - Reset the line to empty, and append the current word
- Create horiz bars and empty lines as needed
- Print each line of text, padding to max width as necessary
*/

function horizontalBorder(textWidth) {
  return "+-" + "-".repeat(textWidth) + "-+";
}

function emptyLine(textWidth) {
  return "| " + " ".repeat(textWidth) + " |";
}

function textLine(str, textWidth) {
  return "| " + str.padEnd(textWidth, " ") + " |";
}

function logInBox(str) {
  console.log(horizontalBorder(str.length));
  console.log(emptyLine(str.length));
  console.log(textLine(str, str.length));
  console.log(emptyLine(str.length));
  console.log(horizontalBorder(str.length));
}

// logInBox("To boldly go where no one has gone before.");
// logInBox("");

function logInBoxWrap(str, windowWidth = 80) {
  const textWidth = windowWidth - 4;
  let line = "";
  let lines = [];
  let words = str.split(" ");
  while (words.length > 0) {
    if (line.length + 1 + words[0].length <= textWidth) {
      line = line ? line + " " + words.shift() : words.shift();
      console.log(line);
    } else {
      lines.push(line);
      line = words.shift();
    }
  }
  if (line) lines.push(line);
  console.log(horizontalBorder(textWidth));
  console.log(emptyLine(textWidth));
  lines.forEach((line) => console.log(textLine(line, textWidth)));
  console.log(emptyLine(textWidth));
  console.log(horizontalBorder(textWidth));
}

logInBoxWrap(
  "To boldly go where no one has gone before. Four score and seven years ago. I have a dream"
);
logInBoxWrap("abc def", 40);
logInBoxWrap("", 30);
