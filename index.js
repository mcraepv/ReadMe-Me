const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
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
  {
    type: "input",
    name: "year",
    message: "Please enter the copyright year.",
  },
  {
    type: "input",
    name: "name",
    message: "What is your name (for copyright)?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: ["MIT License", "Apache 2.0", "BSD 3-Clause License"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data);
  fs.writeFile(fileName, markdown, (err) => {
    if (err) {
      throw err;
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    if (answers.title === "") {
      return console.log("Your project must have a title.");
    }
    if (answers.year === "") {
      return console.log("Your copyright needs a year.");
    }
    if (answers.name === "") {
      return console.log("Your copyright needs a name.");
    }
    if (answers.github === "") {
      return console.log("Your project must link to a GitHub account.");
    }
    if (answers.email === "") {
      return console.log(
        "Your project must include an email to reach you for questions."
      );
    }
    writeToFile("README.md", answers);
    console.log(answers);
  });
}

// function call to initialize program
init();
