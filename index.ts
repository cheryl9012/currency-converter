#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
       
console.log(chalk.bold.blue('tWelcome to currency Converter Application'));
const currency: any = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  INR: 83.31,
  PKR: 278,
  LKR : 0.93,
  AED : 75.81

};

let user_ans = await inquirer.prompt([
  {
    name: "from",
    message: " Convert Currency from",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR" , "LKR", "AED"],
  },

  {
    name: "to",
    message: "Convert Currency to",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR" , "LKR" , "AED"],
  },

  {
    name: "amount",
    message: " Enter your Amount",
    type: "number",
  },
]);

let fromAmount = currency[user_ans.from];
let toAmount = currency[user_ans.to];
let amount = user_ans.amount;

let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(Math.round(convertedAmount));
