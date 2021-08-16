// Add validation for valid prompts (filename, etc)

// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require (`./utils/generateMarkdown`);

const possibleSections = [
  `Installation`,
  `Usage`,
  `Contribution`,
  `Testing`,
  `License`,
  `Questions`
]

// TODO: Create an array of questions for user input
const questions = [
  { type: "input",
    name: "writeFileAbsolutePath",
    message: "Please copy and paste the ABSOLUTE path to the directory in which you want your README to appear. Hit enter to choose the current directory of the terminal.",
    default: "./"
  },
  { type: "input",
    name: "fileName",
    message: "Please enter the name for your readme file, NOT INCLUDING the file extension",
    default: "README"
  },
  { type: "input",
  name: "title",
  message: "What is the title of your application?",
  },
  { type: "editor",
  name: "description",
  message: "Please enter a short description of your application.",
  },
  { type: "input",
    name: "imagePath",
    message: "If you would like to add a screenshot of your application, please copy and paste the URL or the RELATIVE filepath from your application's root directory here. Otherwise, hit enter to skip.",
  },
      { type: "input",
        name: "imageAltText",
        message: "Enter the alt text for your image",
        when: (answers) => answers.imagePath !== ""
      },
      { type: "input",
        name: "imageHoverText",
        message: "Enter the text to appear when image is hovered over.",
        when: (answers) => answers.imagePath !== ""
      },
  { type: "checkbox",
    name: "includeSections",
    message: "Please select which other sections you would like your readme to include. (ALL are selected by default)",
    choices: possibleSections,
    default: possibleSections
  },
  { type: "editor",
    name: "Installation",
    message: "Please enter Installation instructions for your application.",
    when: (answers) => answers.includeSections.includes("Installation")
  },
  { type: "editor",
    name: "Usage",
    message: "Please enter a detailed description of how to use your application.",
    when: (answers) => answers.includeSections.includes("Usage")
  },
  { type: "editor",
    name: "Contribution",
    message: "Please enter guidelines for individuals looking to contribute to your application.",
    when: (answers) => answers.includeSections.includes("Contribution")
  },
  { type: "editor",
    name: "Testing",
    message: "Please enter instructions for users to test your application.",
    when: (answers) => answers.includeSections.includes("Testing")
  },
  { type: "editor",
    name: "Questions",
    message: "Please enter guidelines for getting in contact with you if users have further questions. \n***Do not include specific contact methods, as those will be in the next prompt.",
    default: "Please do not hesitate to reach out with any questions you may have. I can be reached in the following ways:",
    when: (answers) => answers.includeSections.includes("Questions")
  },
  { type: "checkbox",
    name: "ContactMethods",
    message: "Please select the ways in which users may contact you",
    default: [
      `Email`,
      `GitHub`, 
      `Twitter`
    ],
    choices: [
      `Email`,
      `GitHub`, 
      `Twitter`
    ],
    when: (answers) => answers.includeSections.includes("Questions")
  },
      { type: "input",
        name: "GitHub",
        message: "Please enter your GitHub username to populate to contact methods.",
        when: (answers) => {
          if(answers.includeSections.includes(`Questions`) && answers.ContactMethods.includes(`GitHub`)){
            return true;
          }
        }
      },
      { type: "input",
        name: "Email",
        message: "Please enter your Email to populate to contact methods.",
        when: (answers) => {
          if(answers.includeSections.includes(`Questions`) && answers.ContactMethods.includes(`Email`)){
            return true;
          }
        }
      },
      { type: "input",
        name: "Twitter",
        message: "Please enter your Twitter handle to populate to contact methods.",
        when: (answers) => {
          if(answers.includeSections.includes(`Questions`) && answers.ContactMethods.includes(`Twitter`)){
            return true;
          }
        }
      },
  { type: "list",
    name: "License",
    message: "Please select the usage license for this application, or hit enter to skip",
    pageSize: 16,
    choices: [
      ``,
      new inquirer.Separator(`------`),
      `Apache 2.0`, 
      new inquirer.Separator(`------`), 
      `GNU GPL v3`, 
      new inquirer.Separator(`------`), 
      `GNU GPL v2`, 
      new inquirer.Separator(`------`), 
      `ISC`, 
      new inquirer.Separator(`------`), 
      `MIT`, 
      new inquirer.Separator(`------`), 
      `MPL 2.0`, 
      new inquirer.Separator(`------`), 
      `The Unlicense`, 
      new inquirer.Separator(`------`)
    ],
    when: (answers) => answers.includeSections.includes("License")
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let markdown = generateMarkdown(data);
  fs.writeFile(`${fileName}.md`, markdown, (err) => {
    if (err) {
      console.log(`Something went wrong`, err);
    }
    else {
      console.log(`${data.fileName}.md successfully generated at ${fileName}`);
    }
  })
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then((answers) => {
  writeToFile(`${answers.writeFileAbsolutePath}/${answers.fileName}`, answers)
})}

// Function call to initialize app

//logic to ensure app is not initialized twice if called from generatereadme Terminal Command

let terminalArgs = process.argv;

let extractedTerminalArgs = terminalArgs.map((arg) => {
  if (arg.includes(`node.exe`)){
    return arg.substr(arg.indexOf(`node.exe`), 8);
  }
  if (arg.includes(`index`)){
    return arg.substr(arg.indexOf(`index`), 5);
  }
return false;
})

let checkTerminalArgs = (extractedTerminalArgs) => {
  if (extractedTerminalArgs.includes(false)) {
    console.log(`Initializing README Generator...`);
    return;
  }
  if (extractedTerminalArgs.includes(`node.exe`) && extractedTerminalArgs.includes(`index`)){
    console.log(`Initializing README Generator...`);
    init();
  }
}

checkTerminalArgs(extractedTerminalArgs);

exports.init = init;

    
