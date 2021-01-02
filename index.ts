import Prompt from 'prompt-sync';
import { GREEN, RED, WHITE } from './types';

const prompt = Prompt();

const attempts = prompt("Enter number of attempts: ");
const inputStr = prompt("Enter the characters: ");

const characters: string[] = Array.from(inputStr);
let countChars = characters.length;
let response = {correct: 0, wrong: 0};

let showNext = 0;
let time = [];

while(showNext < Number(attempts)) {
  const random = Math.floor(Math.random() * countChars);
  
  console.log("Type: ", characters[random]);
  
  console.time((showNext+1).toString());
  let startTime = Date.now();
  
  const enteredInput = prompt("");
  
  console.timeLog((showNext+1).toString());
  let endTime = Date.now();

  time.push((endTime-startTime)/1000 + " seconds");

  if (enteredInput == characters[random]) {
    response.correct++;
    console.log(`${GREEN}%s${WHITE}`, '✔');
  } else {
    response.wrong++;
    console.log(`${RED}%s${WHITE}`, '✖');
  }
  console.log(`${WHITE}%s${GREEN}%s${WHITE}%s${RED}%s${WHITE}`, 'Correct: ', response.correct, ' Wrong: ', response.wrong);
  showNext++;
}

console.log(`You have ${response.correct} Correct response and ${response.wrong} Wrong response`);

time.map((gap, index) => {
  console.log((index+1), gap);
});

console.log("Thank You");
