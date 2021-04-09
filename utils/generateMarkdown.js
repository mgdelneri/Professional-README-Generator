// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

Badge

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

For questions, please email: ${data.email}

## License

${data.license}`;
}

module.exports = generateMarkdown;
