var inquirer = require("inquirer");
// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project.",
  },
  {
    type: "input",
    name: "install",
    message: "How does a user install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Tell the user how to use your project.",
  },
  {
    type: "input",
    name: "contribute",
    message: "How can a developer contribute to your project?",
  },
  {
    type: "input",
    name: "test",
    message: "How can a user test your project?",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
