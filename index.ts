import { exit } from 'process';
import Prompt from 'prompt-sync';
import { GREEN, RED, ResponseObj, WHITE } from './types';

const prompt = Prompt();

const menus = ["Fast Type Characters", "Fast Type Words"];

while(true) {
  menus.map((menu, index) => {
    console.log(`${index+1}. ${menu}`);
  });
  console.log("0. Quit");
  
  let selectedOption = prompt("Please select an option: ");
  if (Number(selectedOption)) {
    let option = Number(selectedOption);
    if (option === 0) {
      exit();
    }
  
    switch (menus[option-1]) {
      case menus[0]: {
        fastTypeCharacters();
        break;
      }
      case menus[1]: {
        fastTypeWords();
        break;
      }
    }
  } else if (Number(selectedOption) == 0) {
    break;
  } else {
    throw new Error("Invalid option");
  }
}

function fastTypeCharacters() {
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
    
    console.timeEnd((showNext+1).toString());
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
}

function fastTypeWords() {
  const attempts = prompt("Enter number of attempts: ");
  
  const characters: string[] = ["a", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
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
    
    console.timeEnd((showNext+1).toString());
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
}

console.log("Thank You");
