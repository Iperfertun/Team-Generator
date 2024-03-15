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

//Start application 
function initApp() {
        //prompt id use for manager
        function addManager() {
            console.log("Start building your team profile");
            inquirer.prompt([
              {
                type: "input", 
                name: "managerName",
                message: "What is manager's name?", 
                validate: answer => {
                    if (answer !== "") {
                        return true; 
                    }
                    return "Please enter the team's manager's name.";
                }
              },
              {
                    type: "input",
                    name: "managerId", 
                    message: "what is the manager's ID?",
                    validate: answer => {
                        if (answer !=="") {
                            return true;
                        }
                        return "Email can't be untenanted.";
                    }
              },
              {
                    type: "input", 
                    name: "managerOfficalNumber",
                    message: "what is the manager's office Contact? (format: +4424111113)", 
                    validate: answer => {
                        const pass =amswer.match (
                            /^[1-9]\d*$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "please enter a correct phone number.";
                    } 
              }
            ]).then(answers => {
                const manager = new manager(answer.managerName, answer.managerId, answers.managerEmail, answers.managerOfficeNumber);
                teamArr.push(manager); 
                idArr.push(answers.managerId);
                addTeam();
            });
        }
    }
      
    // Addteam  function to the manager
    function addTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What would you like to add next?",
                choices: [
                    "Engineer",
                    "Intern",
                    "End application"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    generateHTML();
              }
        });
    }

    