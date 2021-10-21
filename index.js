const inquirer = require('inquirer');
const fs = require('fs');

const CHOICES = fs.readdirSync(__dirname + '/templates');

const questions = [
        {
        name: 'project-choice',
        type: 'list',
        message: 'what project template would you want to generate',
        choices: CHOICES,
        },
        {
            name: 'project-name',
            type: 'input',
            message: 'Project Name',
            validate: (input) => {
                if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
                else return 'Project name may only include letters, numbers, underscores and hashes.';
            }
        }

];

const CURR_DIR = process.cwd();

inquirer.prompt(questions)
  .then(answers => {
    const projectChoice = answers['project-choice'];
    const projectName = answers['project-name'];
    const templatePath = `${__dirname}/templates/${projectChoice}`;
  
    fs.mkdirSync(`${CURR_DIR}/${projectName}`);

    createDirectoryContents(templatePath, projectName);
  });

  function createDirectoryContents (templatePath, newProjectPath) {
    const filesToCreate = fs.readdirSync(templatePath);
  
    filesToCreate.forEach(file => {
      const origFilePath = `${templatePath}/${file}`;
      
      // get stats about the current file
      const stats = fs.statSync(origFilePath);
  
      if (stats.isFile()) {
        const contents = fs.readFileSync(origFilePath, 'utf8');
        if (file === '.npmignore') file = '.gitignore';
        const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
        fs.writeFileSync(writePath, contents, 'utf8');
      } else if (stats.isDirectory()) {
        fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);
        
        // recursive call
        createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
      }
    });
  }