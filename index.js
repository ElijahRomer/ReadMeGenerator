// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);

// TODO: Create an array of questions for user input
const questions = [
  { type: "input",
    name: "title",
    message: "What is the title of your application?"
  },
  { type: "input",
    name: "description",
    message: "Please enter a detailed description of your application."
  },
  { type: "input",
    name: "installation",
    message: "Please enter Installation instructions for your application"
  },
  { type: "input",
    name: "usage",
    message: "Please enter usage information for your application"
  },
  { type: "input",
    name: "contribution",
    message: "Please guidelines for individuals looking to contribute to your application"
  },
  { type: "input",
    name: "Table of Contents",
    message: "Please enter Installation instructions for your application"
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)



    }

// Function call to initialize app
init();
