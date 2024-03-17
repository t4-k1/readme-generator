// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter project name:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Project description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: "Project's usage:",
  },
  {
    type: 'input',
    name: 'license',
    message: 'License:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Contributors:',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Test command:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter email:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter Github username:',
  },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const content = generateMarkdown(answers)
    writeToFile('README.md', content)
  })
}

// Function call to initialize app
init()
