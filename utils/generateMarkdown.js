// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return ('![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)')
    } else if (license === 'Apache') {
        return ('![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)')
    } else if (license === 'GPLv2') {
        return ('![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)')
    } else {
        return ('')
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents

* [Description]()
* [Installation]()
* [Usage]()
* [Contributing]()
* [Tests]()
* [Questions]()
* [License]()

## Description

### What?
${data.description}

### Why?
${data.problem}

### How?
${data.process}

### Significance
${data.identity}

### Lessons Learned
${data.lessons}

## Installation
${data.installation}

## Usage 
${data.usage}

Here is an image of the ${data.title} application: 

![](${data.screenshot})

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions

GitHub username: ${data.github}  
GitHub profile: [GitHub Profile](https://github.com/${data.github})

For questions, please email: <${data.email}>

## License

${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
