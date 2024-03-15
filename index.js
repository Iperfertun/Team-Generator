//Dependecies 
const fs = require('fs');
const path = require('path');
const jest = require('jest');
const inquirer = require('inquirer');

//constructors 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');


const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');
const render = require('./src/page.js');

// Arrays for teams and id as place holders
const teamArr = [];
const idArr = [];