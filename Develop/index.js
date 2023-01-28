// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')



console.log(`Hello...`);

// TODO: Create an array of questions for user input
const questions = [ 
    {
      type: 'input',
      message: 'What is your user project title ?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your entitled Description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is your Installation',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'What is your usage?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What is your License?',
      name: 'license',
      choices: ['MIT', 'APACHE', 'IBM']
    },
    {
        type: 'input',
        message: 'What is your contributing?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'What is your GitHub?',
        name: 'GitHub',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },

 ]
 inquirer.prompt(questions) 
  .then((response) => {
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('Success!')
      fs.writeFileSync('README.md', generateMarkdown(response))
  }
)
 

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


