import { exit } from "process";
import Prompt from "prompt-sync";

import { FAST_TYPE_MENUS } from "./src/contants";
import { fastTypeCharacters, fastTypeWords } from "./src/utilities";

const prompt = Prompt();

const menus: string[] = FAST_TYPE_MENUS;

while (true) {
  menus.map((menu, index) => {
    console.log(`${index + 1}. ${menu}`);
  });
  console.log("0. Quit");

  let selectedOption = prompt("Please select an option: ");
  if (Number(selectedOption)) {
    let option = Number(selectedOption);
    if (option === 0) {
      exit();
    }

    switch (menus[option - 1]) {
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

console.log("Thank You");
