const fs = require('fs');

// function to generate markdown for README
function generateMarkdown(answer) {
  return `
  # ${answer.title}

  # Table of Contents
    - [description](#description)
    - [url](#url)
    - [purpose](#purpose)
    - [contributions](#contributions)
    - [license](#license)
    - [github](#github)
    - [email](#email)

    ## Description of Project
    ${answer.description}

    ## Installation
    ${answer.installation}

    ## Usage
    ${answer.usage}

    ## Contribution:
    ${answer.contribution}

    ## Testing
    ${answer.test}

    ## License:
    ${answer.license}

    ## Github Profile:
    Visit my GitHub profile:
    ${answer.github}
    
    ## Email Address:
    To know more about this project, email me at:
    ${answer.email}

`;
}

module.exports = generateMarkdown;
