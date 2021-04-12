// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return ('![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)')
    } else if (license === 'Apache') {
        return ('![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)')
    } else if (license === 'GPLv2') {
        return ('![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)')
    } else if (license === 'none') {
        return ('')
    }
}

// Function that returns the license link
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return ('[MIT License](https://opensource.org/licenses/MIT)')
    } else if (license === 'Apache') {
        return ('[Apache License](https://opensource.org/licenses/Apache-2.0)')
    } else if (license === 'GPLv2') {
        return ('[GPLv2 License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)')
    } else if (license === 'none') {
        return ('')
    }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
    var licenseLink = renderLicenseLink(license);
    if (license === 'MIT' || 'Apache' || 'GPLv2') {
        return ('Licensed under the ' + licenseLink)
    } else if (license === 'none') {
        return ('')
    }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents

* [Description](##Description)
* [Installation](##Installation)
* [Usage](##Usage)
* [Contributing](##Contributing)
* [Tests](##Tests)
* [Questions](##Questions)
* [License](##License)

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
