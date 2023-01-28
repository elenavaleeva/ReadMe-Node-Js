// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title

// fs.readFile( path.join(__dirname,'Develop', 'units', 'generateMarkdown.js'), 'utf8',(err, data)  => {
//     if (err) throw err;
//     console.log(data);
// })

// // process.on('uncaughtException', err => {
// //     console.error(`There was an uncaught error: ${err}`);
// //     process.exit(1);
// // })

// fs.writeFile( path.join(__dirname,'Develop', 'units', 'README.md'),' Nice to meet you', (err)  => {
//     if (err) throw err;
//     console.log(`write complete`);
// })

// fs.appendFile( path.join(__dirname,'Develop', 'units', 'README.md'),' Text check', (err)  => {
//     if (err) throw err;
//     console.log(`append complete`);
// })
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
 



//  // TODO: Create a function to write README file
//  fs.writeFile('log.txt', process.data, (err) =>
//  err ? console.error(err) : console.log('Success!')
// );


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


