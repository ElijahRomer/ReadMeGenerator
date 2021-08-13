// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case `Apache 2.0`:
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    case `GNU GPL v3`:
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"

    case `GNU GPL v2`:
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"

    case `ISC`:
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"

    case `MIT`:
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

    case `MPL 2.0`:
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"

    case `The Unlicense`:
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return "";
  return `

  This application is licensed under ${license}.
  
  Click the license badge below for more information and usage guidelines:

  ${renderLicenseBadge(license)}
  
  Click [here](${licenseLegalTerms(license)}
    "${license} Full Terms and Conditions") to view the full terms and conditions text of ${license}.`
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ---
  ## Table of Contents
  1. [Installation](#installation)
  1. [License Information](#license-information)
  1. [License Information](#license-information)
  1. [License Information](#license-information)

  ---
  ## Installation
  ${data.installation}

  ---
  ## Usage
  ${data.usage}

  ---
  ## License Information
  ${renderLicenseSection(data.license)}

  ---
  ## Contributing
  ${data.contribution}

  ---
  ## Tests
  ${data.testing}

  ---
  ## Questions
  ${data.github}

`;
}

module.exports = generateMarkdown;
