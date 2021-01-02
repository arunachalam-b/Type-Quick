import Prompt from 'prompt-sync';

const prompt = Prompt();

const inputStr = prompt("Enter the characters: ");

const characters: string[] = Array.from(inputStr);
let countChars = characters.length;
let response = {correct: 0, wrong: 0};

let showNext = 0;

while(showNext < 5) {
  const random = Math.round(Math.random() * countChars);
  console.log("Random", random);
  console.log("Type: ", characters[random]);
  const enteredInput = prompt("");
  if (enteredInput == characters[random]) {
    response.correct++;
  } else {
    response.wrong++;
  }
  showNext++;
}

console.log(`You have ${response.correct} Correct response and ${response.wrong} response`);

console.log("Thank You");
