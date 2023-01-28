// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

  }else if (license === "APACHE") {
  return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  
  } else if (license === "IBM") {
    return " [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  } else 
  return console.error(err);
  }


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
// if (license === "APACHE") {
//   return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
// }
// }



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license === "IBM") {
//     return " [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## description
${data.description}
## Installation
${data.Installation}
## usage
${data.usage}
## License 
${renderLicenseBadge(data.license)}
## contributing
${data.contributing}
## GitHub
${data.GitHub}
## email
${data.email}
`;
}

module.exports = generateMarkdown;
