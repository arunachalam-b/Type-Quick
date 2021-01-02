import Prompt from 'prompt-sync';
import { GREEN, RED, ResponseObj, WHITE } from './types';

const prompt = Prompt();

const attempts = prompt("Enter number of attempts: ");
const inputStr = prompt("Enter the characters: ");

const characters: string[] = Array.from(inputStr);
let countChars = characters.length;
let response = {correct: 0, wrong: 0};

let showNext = 0;
let userResponse: ResponseObj[] = [];

while(showNext < Number(attempts)) {
  const random = Math.floor(Math.random() * countChars);
  let responseObj: ResponseObj = {status: null, time: null};
  
  console.log("Type: ", characters[random]);
  
  console.time((showNext+1).toString());
  let startTime = Date.now();
  
  const enteredInput = prompt("");
  
  console.timeLog((showNext+1).toString());
  let endTime = Date.now();

  responseObj.time = (endTime-startTime)/1000 + " seconds";
  
  if (enteredInput == characters[random]) {
    response.correct++;
    console.log(`${GREEN}%s${WHITE}`, '✔');
    responseObj.status = '✔';
  } else {
    response.wrong++;
    console.log(`${RED}%s${WHITE}`, '✖');
    responseObj.status = '✖';
  }

  userResponse.push(responseObj);

  console.log(`${WHITE}%s${GREEN}%s${WHITE}%s${RED}%s${WHITE}`, 'Correct: ', response.correct, ' Wrong: ', response.wrong);

  showNext++;
}

console.log(`You have ${response.correct} Correct response and ${response.wrong} Wrong response`);

userResponse.map((res, index) => {
  console.log((index+1), res.status, res.time);
});

console.log("Thank You");
