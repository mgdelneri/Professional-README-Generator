// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
    message: 'contributing',
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
    type: 'checkbox',
    message: 'Please select any relevant licenses:',
    name: 'license',
    choices: ['MIT', 'Apache', 'GPLv2'],
   }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);

        if (err) {
            return console.log(err);
        } else {
            return console.log("Success!");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
     .prompt(questions)
     .then((data) => {
         writeToFile("README.md", markdown);
         console.log(data);
     });
}

// Function call to initialize app
init();

/* function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if(err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkDown(data));
            console.log(data)
        })
}
// Function call to initialize app
init();*/