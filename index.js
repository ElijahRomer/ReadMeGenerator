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
    name: "fileName",
    message: "Please enter the name for your readme file, NOT INCLUDING the file extension",
    default: "README"
  },
  { type: "input",
  name: "title",
  message: "What is the title of your application?",
  default: "Awesome Application"
  },
  { type: "input",
  name: "description",
  message: "Please enter a short description of your application.",
  default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum quod, animi unde dolor veniam voluptates accusamus magni eaque omnis odit libero earum deserunt accusantium molestiae ipsa nostrum quidem ut."
  },
  { type: "input",
    name: "imagePath",
    message: "If you would like to add a screenshot of your application, please copy and paste the relative path or URL here. Otherwise, hit enter to skip.",
    default: "instructions/kitty.jpg"
  },
      { type: "input",
        name: "imageAltText",
        message: "Enter the alt text for your image",
        default: "Kitteh",
        when: (answers) => answers.imagePath !== ""
      },
      { type: "input",
        name: "imageHoverText",
        message: "Enter the text to appear when image is hovered over.",
        default: "Cute lil' kitteh",
        when: (answers) => answers.imagePath !== ""
      },
  { type: "checkbox",
    name: "includeSections",
    message: "Please select which other sections you would like your readme to include. (ALL are selected by default)",
    choices: possibleSections,
    default: possibleSections
  },
  { type: "input",
    name: "Installation",
    message: "Please enter Installation instructions for your application.",
    default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum quod, animi unde dolor veniam voluptates accusamus magni eaque omnis odit libero earum deserunt accusantium molestiae ipsa nostrum quidem ut.",
    when: (answers) => answers.includeSections.includes("Installation")
  },
  { type: "input",
    name: "Usage",
    message: "Please enter a detailed description of how to use your application.",
    default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum quod, animi unde dolor veniam voluptates accusamus magni eaque omnis odit libero earum deserunt accusantium molestiae ipsa nostrum quidem ut.",
    when: (answers) => answers.includeSections.includes("Usage")
  },
  { type: "input",
    name: "Contribution",
    message: "Please enter guidelines for individuals looking to contribute to your application.",
    default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum quod, animi unde dolor veniam voluptates accusamus magni eaque omnis odit libero earum deserunt accusantium molestiae ipsa nostrum quidem ut.",
    when: (answers) => answers.includeSections.includes("Contribution")
  },
  { type: "input",
    name: "Testing",
    message: "Please enter instructions for users to test your application.",
    default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum quod, animi unde dolor veniam voluptates accusamus magni eaque omnis odit libero earum deserunt accusantium molestiae ipsa nostrum quidem ut.",
    when: (answers) => answers.includeSections.includes("Testing")
  },
  { type: "input",
    name: "Questions",
    message: "Please enter guidelines for getting in contact with you if users have further questions. \n***Do not include specific contact methods, as those will be in the next prompt.",
    default: "I am open to questions and may be reached at the following!",
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
        default: "ElijahRomer",
        when: (answers) => answers.ContactMethods.includes(`GitHub`)
      },
      { type: "input",
        name: "Email",
        message: "Please enter your Email to populate to contact methods.",
        default: "Romere88@gmail.com",
        when: (answers) => answers.ContactMethods.includes(`Email`)
      },
      { type: "input",
        name: "Twitter",
        message: "Please enter your Twitter handle to populate to contact methods.",
        default: "@McConaughey",
        when: (answers) => answers.ContactMethods.includes(`Twitter`)
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
      console.log(`something went wrong line 122`, err);
    }
    else {console.log(`Data Written`)}
  })
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then((answers) => {
  console.log(`line 132`, answers)
  console.log(`line 133`, answers.fileName)
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
    
    
