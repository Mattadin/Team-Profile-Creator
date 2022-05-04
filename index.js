const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const buildSite = require('./src/build-site.js');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'Manager name?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter the manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "Enter manager's ID",
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log("Employee ID required.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter manager's email",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Manager's email is required.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter manager's office number",
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log("Manager's office number is required.");
                return false;
            }
        }
    
    }]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: "Select an option below:",
            chloices: ['add an engineer', 'add an intern', 'finished! Build site.']
        }
    ]).then(userChoice => {
        switch (userChoice.menu) {
            case 'add an engineer':
                promptEngineer();
                break;
            case 'add an intern':
                promptIntern();
                break;
            default:
                buildTeam();
        }
    })
};

const promptEngineer = () => {
    console.log('ADDING NEW ENGINEER:');
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'Engineer name?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter the engineer's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "Enter engineer's ID",
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log("engineer's ID required.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter engineer's email",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("engineer's email is required.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUserName',
        message: "Please enter engineer's Github username",
        validate: githubUserName => {
            if (githubUserName) {
                return true;
            } else {
                console.log("Engineer's Github username is required.");
                return false;
            }
        }
    
    }]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUserName);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log('ADDING NEW INTERN:');
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'Intern name?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter the intern's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "Enter intern's ID",
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log("intern's ID required.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter intern's email",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("intern's email is required.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter intern's school's name",
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log("Intern's school's name is required.");
                return false;
            }
        }
    
    }]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, buildSite(teamMembers), "utf-8");
}

promptManager();