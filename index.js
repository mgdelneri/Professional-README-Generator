// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

inquirer
    .prompt([
        {
         type: 'input',
         message: 'What is the title of your project?',
         name: 'title'
        },
        {
         type: 'input',
         message: 'What problem does your project solve?/Why build it?',
         name: 'problem',
        },
        {
         type: 'input',
         message: 'How did you create this project?',
         name: 'process',
        },
        {
         type: 'input',
         message: 'What makes your project stand out?',
         name: 'identity',
        },
        {
         type: 'input',
         message: 'What did you learn from working on this project?',
         name: 'lessons',
        },
        {
         type: 'input',
         message: 'Please include installation instructions:',
         name: 'installation',
        },
        {
         type: 'input',
         message: 'Please include an example of usage:',
         name: 'usage',
        },
        {
         type: 'input',
         message: 'Please include a relative filepath to a screenshot of your project:',
         name: 'screenshot',
        },
        {
         type: 'checkbox',
         message: 'Please select any relevant licenses:',
         name: 'license',
        },
        {
         type: 'input',
         message: 'How can someone contribute to your project?',
         message: 'contributing',
        },
        {
         type: 'input',
         message: 'How can someone test your application?',
         name: 'tests',
        },
        {
         type: 'input',
         message: 'What is your GitHub username?',
         name: 'github',
        },
        {
         type: 'input',
         message: 'What is your email address?',
         name: 'email',
        }
    ])

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();