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
    ## Live URL
    To visit the live application:
    ${answer.url}
    ## Purpose of the Project:
    ${answer.purpose}
    ## Contributors:
    ${answer.contributions}
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
