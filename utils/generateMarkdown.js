// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case `Apache 2.0`:
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg "Click for more information on Apache 2.0")](https://opensource.org/licenses/Apache-2.0)`;

    case `GNU GPL v3`:
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg "Click for more information on GNU General Public License (GPL) v3")](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`

    case `GNU GPL v2`:
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg "Click for more information on GNU General Public License (GPL) v2")](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`

    case `ISC`:
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg "Click for more information on the Internet Services Consortium License (ISC)")](https://opensource.org/licenses/ISC)`

    case `MIT`:
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg "Click for more information on the Massachusets Institute of Technology License (MIT)")](https://opensource.org/licenses/MIT)`

    case `MPL 2.0`:
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg "Click for more information on Mozilla Public License (MPL) 2.0.0")](https://opensource.org/licenses/MPL-2.0)`

    case `The Unlicense`:
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg "Click for more information on The Unlicense")](http://unlicense.org/)`
  }  
}

function licenseNameVerbose(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case "Apache 2.0":
      return "Apache 2.0";

    case `GNU GPL v3`:
      return `GNU General Public License (GPL) v3`

    case `GNU GPL v2`:
      return `GNU General Public License (GPL) v2`

    case `ISC`:
      return `Internet Services Consortium License (ISC)`

    case `MIT`:
      return `The Massachusets Institute of Technology License (MIT)`

    case `MPL 2.0`:
      return `Mozilla Public License (MPL) 2.0`

    case `The Unlicense`:
      return `The Unlicense`
  }  
}

function licenseLegalTerms(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case `Apache 2.0`:
      return `https://www.apache.org/licenses/LICENSE-2.0.txt`;

    case `GNU GPL v3`:
      return `https://www.gnu.org/licenses/gpl-3.0.en.html`

    case `GNU GPL v2`:
      return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`

    case `ISC`:
      return `https://opensource.org/licenses/ISC`

    case `MIT`:
      return `https://www.mit.edu/~amini/LICENSE.md`

    case `MPL 2.0`:
      return `https://www.mozilla.org/media/MPL/2.0/index.48a3fe23ed13.txt`

    case `The Unlicense`:
      return `https://unlicense.org/`
  }  
}


//Bash Terminal uses / Linux whereas copying filepath in windows uses \. Causes issue when copying/pasting  filepath in Windows. The below code does not work as the bash terminal delivers the filepath with the file separators treated like escape characters. Researching workaround. 

// function fixImagePath (imagePath) {
//   for (let i = 0; i < imagePath.length; i++) {
//     if (imagePath[i] === "\\") {
//       imagePath.replace(/\\/g, "/")
//     }
//   }
// }

function renderAppScreenshot(imagePath, altText, hoverText) {
  //if imagePath contains \, replace with /
  if (imagePath === ""){
    return "";
  }
  return  `![${altText}](${imagePath} "${hoverText}")`
}

function renderTableOfContents(includedSectionArray) {
  if (includedSectionArray.length <= 1){
    return "";
  }
  let tableOfContents = `## Table of Contents`;
  for (let i = 0; i < includedSectionArray.length; i++) {
    tableOfContents += `\n1. [${includedSectionArray[i]}](#${includedSectionArray[i].toLowerCase()})`;
  }
  return tableOfContents;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license === "") {return ""};
  return `## License
  
  This application is licensed under **${licenseNameVerbose(license)}**.
  
  Click the license badge below for more information and usage guidelines:
  
  ${renderLicenseBadge(license)}
  
  Click [here](${licenseLegalTerms(license)}
  "${license} Full Terms and Conditions") to view the full terms and conditions text of ${license}.
  
  ---
  
  `
};

function fixTwitterHandle(twitterHandle) {
  if (!twitterHandle.includes(`@`)){
    return twitterHandle;
  }
  return twitterHandle.slice(1, twitterHandle.length);
}

function renderQuestionsSection(data) {
  let questionSection = `## Questions
  
${data.Questions}

`
for (let i = 0; i <data.ContactMethods.length; i++) {
  switch(data.ContactMethods[i]) {
    case `GitHub`:
      questionSection += `* GitHub: [${data.GitHub}](http://www.github.com/${data.GitHub})\n`
      break;
    case `Email`:
      questionSection += `* Email: [${data.Email}](mailto:${data.Email})\n`
      break;
    case `Twitter`:
      questionSection += `* Twitter: [${data.Twitter}](http://www.twitter.com/${fixTwitterHandle(data.Twitter)})\n`
      break;
  }
}
return questionSection +=`

Thank you for reaching out and I look forward to getting in touch with you soon!

`
}

function renderSelectedSections(includedSectionArray, data) {
  let sections = ``;
  for (let i = 0; i < includedSectionArray.length; i++) {
    if (includedSectionArray[i] === `License`){
      sections += renderLicenseSection(data.License);
      continue;
    } else if (includedSectionArray[i] === `Questions`) {
      sections += renderQuestionsSection(data)
      continue;
    }
    sections += `## ${includedSectionArray[i]}
    
${data[includedSectionArray[i]]}

---

`;
  }
  return sections;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.License)}
  
  ## Description
  ${data.description}
  
  ${renderAppScreenshot(data.imagePath, data.imageAltText, data.imageHoverText)}

  ---
  ${renderTableOfContents(data.includeSections)}

  ---
  
  ${renderSelectedSections(data.includeSections, data)}
`;
}

module.exports = generateMarkdown;