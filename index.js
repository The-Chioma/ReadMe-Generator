const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');
const fs = require('fs');


//Placed some available licenses in an array
const licenses = ['MIT', 'Apache','GNU General Public License','ISC']

//questions below
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your Project:'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please enter a description of your Project:'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What are the instructions for installing your project?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Please enter usage information: '
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Please enter information on how people can contribute to the project: '
    },
    {
        name: 'test',
        type: 'input',
        message: 'Please enter testing instructions: '
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please select from the following licenses: ',
        choices: licenses //from above array
    },
    {
        name: 'github',
        type: 'input',
        message: 'Please enter your GitHub username: ',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Please enter your email address',
    }
];



const init = () => {
    inquirer.prompt(questions).then((answer) => {
        fs.writeFileSync("newReadMe.md", generateMarkdown(answer), function (err) {
          if (error) {
            console.log(error);
          } else {
            console.log("Success");
          }
        });
      });
    
}

init();
