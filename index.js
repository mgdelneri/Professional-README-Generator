// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [        
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
   },
   {
    type: 'input',
    message: 'Please provide a short description of your project:',
    name: 'description',
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
    type: 'input',
    message: 'How can someone contribute to your project?',
    name: 'contributing',
   },
   {
    type: 'input',
    message: 'What command runs tests for your application?',
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
   },
   {
    type: 'list',
    message: 'Please select a license, if applicable:',
    name: 'license',
    choices: ['MIT', 'Apache', 'GPLv2', 'none'],
   }
];

// Function to write README file
function writeToFile(fileName, template) {
    fs.writeFile(fileName, template, function(err) {
        console.log(fileName);

        if (err) {
            return console.log(err);
        } else {
            return console.log("Success!");
        }
    })
}

// Function to initialize app
function init() {
    inquirer
     .prompt(questions)
     .then((answers) => {
         // console.log(answers);
         var readme = markdown(answers);
         // console.log(readme);
         writeToFile("./Generated-README/README.md", readme);
     });
}

// Function call to initialize app
init();

