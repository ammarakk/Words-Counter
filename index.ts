#! usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

const anwser :{ sentence :string} = await inquirer.prompt([
     { 
       name: "sentence",
       type :"input",
       message : "ENTER SENTENCE YOU WANT TO COUNT THE WORDS: "
     }
])

const words = anwser.sentence.trim().split(" ")

console.log(words)


console.log(chalk.blueBright(`Your Sentence Words Count Is: ${words.length}`))