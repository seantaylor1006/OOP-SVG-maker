const inquirer = require('inquirer');
const fs = require('fs');

inquirer.createPromptModule([
    {
        type: 'list',
        name: 'shape',
        message: 'select a shape:',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'color',
        message: 'select a color:'
    },
    {
        type: 'input',
        name: 'text',
        message: 'type the 3 letters of your logo:'
    }
]).then((Response) => {
    console.log('creating logo');
    fs.writeFileSync('logo.svc', constructLogo(Response)), err => {
        err ? console.err(err) : console.log('Logo created')
    }
});