// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require (`./utils/generateMarkdown`);

// TODO: Create an array of questions for user input
const questions = [
  { type: "input",
    name: "fileName",
    message: "Please enter the name of your readme file excluding the extension",
    default: "test"
  },
  { type: "input",
    name: "title",
    message: "What is the title of your application?",
    default: "Awesome Application"
  },
  { type: "input",
    name: "description",
    message: "Please enter a detailed description of your application.",
    default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum quod, animi unde dolor veniam voluptates accusamus magni eaque omnis odit libero earum deserunt accusantium molestiae ipsa nostrum quidem ut."
  },
  { type: "input",
    name: "installation",
    message: "Please enter Installation instructions for your application.",
    default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum quod, animi unde dolor veniam voluptates accusamus magni eaque omnis odit libero earum deserunt accusantium molestiae ipsa nostrum quidem ut."
  },
  { type: "input",
    name: "usage",
    message: "Please enter usage information for your application.",
    default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum quod, animi unde dolor veniam voluptates accusamus magni eaque omnis odit libero earum deserunt accusantium molestiae ipsa nostrum quidem ut."
  },
  { type: "input",
    name: "contribution",
    message: "Please enter guidelines for individuals looking to contribute to your application.",
    default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum quod, animi unde dolor veniam voluptates accusamus magni eaque omnis odit libero earum deserunt accusantium molestiae ipsa nostrum quidem ut."
  },
  { type: "input",
    name: "testing",
    message: "Please enter instructions for users to test your application.",
    default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum quod, animi unde dolor veniam voluptates accusamus magni eaque omnis odit libero earum deserunt accusantium molestiae ipsa nostrum quidem ut."
  },
  { type: "input",
    name: "github",
    message: "Please enter your github username to add to the additional questions section.",
    default: "ElijahRomer"
  },
  { type: "list",
    name: "license",
    message: "Please select the usage license for this application:",
    choices: [
      `Apache 2.0`, 
      new inquirer.Separator(`******`), 
      `GNU GPL v3`, 
      new inquirer.Separator(`******`), 
      `GNU GPL v2`, 
      new inquirer.Separator(`******`), 
      `ISC`, 
      new inquirer.Separator(`******`), 
      `MIT`, 
      new inquirer.Separator(`******`), 
      `MPL 2.0`, 
      new inquirer.Separator(`******`), 
      `The Unlicense`, 
      new inquirer.Separator(`******`)
    ]
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let markdown = generateMarkdown(data);
  fs.writeFile(`${fileName}.md`, markdown, (err) => {
    if (err) {
      console.log(`something went wrong line 67`, err);
    }
    else {console.log(`Data Written`)}
  })
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then((answers) => {
  console.log(`line 60`, answers)
  console.log(`line 61`, answers.fileName)
  writeToFile(answers.fileName, answers)
})}

// Function call to initialize app
init();


//code out question logic
  //code out license multiple choice logic
  //make the license a clickable link to the corresponding page on https://opensource.org/licenses

  //code out Further Questions section questions
    //auto generate working link to github
    //add email and question for how to reach me




//code out writing to file logic
    //Title

    //Description
      //Should be able to just insert the raw text from inquirer answer object

    //Table of Contents
      //Will be hardcoded to correspond with each of the Installation, Usage, License, Contributing, Tests, and Questions sections
      //each entry must be a markdown link to corresponding section

    //Installation
      //Should be able to just insert the raw text from inquirer answer object

    //Usage
      //Should be able to just insert the raw text from inquirer answer object

    //License
      //badge icon for license must appears near top in the markdown
      //license explanation and insertion logic

    //Contributing

    //Tests

    //Questions
    
    
