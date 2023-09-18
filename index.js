const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Square = require('./lib/shapes')
const Circle = require('./lib/shapes')
const Triangle = require('./lib/shapes')

const makeCircle = ({Circle, color, text, textColor}) => (

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
    }
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