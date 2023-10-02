const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const {Square, Circle, Triangle} = require('./lib/shapes')


const constructLogo = ({Shaping}) => (
    `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    ${Shaping}
    </svg>`

)

inquirer.prompt([
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
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'type the color of your logo:'
    }
]).then((Response) => {
    console.log('Creating logo');
    fs.writeFileSync('./examples/logo.svg', constructLogo(Response), err => {
        err ? console.err(err) : console.log('Logo created')
    });
});