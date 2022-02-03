const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown');



// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is your project's title?"
  },
  {
    type: 'input',
    name: 'description',
    message: 'Descripe your project. (Include what is does, why you used the technologies you used, some challenges you faced, or some features you hope to implement)'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do we install your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage of your project?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How do we contribute to your project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'How do we test your project?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project have?',
    choices: ['mit', 'gpl-2.0', 'apache-2.0', 'gpl-3.0', 'bsd-3-clause', 'unlicense']
  }

];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {

    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }))

  })
}

// function call to initialize program
init();
