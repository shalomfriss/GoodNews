const inquirer      = require('inquirer');
const { showHeadlines, newsSearch, showTopic } = require('../lib/search');

const TOPICS = ['WORLD', 'NATION', 'BUSINESS', 'TECHNOLOGY', 'ENTERTAINMENT', 'SPORTS', 'SCIENCE', 'HEALTH'];


const runPrompt = async () => {
inquirer
  .prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Menu (esc to exit):',
      choices: ['Headlines', 'Topics', 'Search', 'Search by Geography'],
    },
  ])
  .then(async answers => {
    console.info('Answer:', answers.choice);
    if(answers.choice == 'Headlines') {
        inquirer
            .prompt([
            {
                name: 'resultNumber',
                message: 'How many results should I return?',
                default: 10
            },
        ])
        .then(async answers => {
            var resultNumber = answers.resultNumber
                await showHeadlines(resultNumber);
                console.log("")
                runPrompt();
            });
    } else if(answers.choice == "Topics") {
        inquirer
        .prompt([
            {
              type: 'list',
              name: 'choice',
              message: 'Pick a topic:',
              choices:TOPICS,
            },
          ])
          .then(async answers => {
              var theTopic = answers.choice;

            inquirer
                .prompt([
                {
                    name: 'resultNumber',
                    message: 'How many results should I return?',
                    default: 10
                },
            ])
            .then(async answers => {
                var resultNumber = answers.resultNumber
                    await showTopic(theTopic, resultNumber);
                    console.log("")
                    runPrompt();
                });

          });
    } else if(answers.choice == "Search") {
        inquirer
        .prompt([
            {
            name: 'term',
            message: 'Enter your search term:',
            },
        ])
        .then(async answers => {
            var theTerm = answers.term
            inquirer
                .prompt([
                    {
                    name: 'resultNumber',
                    message: 'How many results should I return?',
                    default: 10
                    },
                ])
                .then(async answers => {
                    var resultNumber = answers.resultNumber
                    await newsSearch(theTerm, resultNumber);
                    console.log("")
                    runPrompt();
                });
                
        });

    } else if(answers.choice == "Search by Geography") {

        inquirer
        .prompt([
            {
            name: 'term',
            message: 'Enter the location:',
            },
        ])
        .then(async answers => {
            var theTerm = answers.term
            inquirer
                .prompt([
                    {
                    name: 'resultNumber',
                    message: 'How many results should I return?',
                    default: 10
                    },
                ])
                .then(async answers => {
                    var resultNumber = answers.resultNumber
                    await newsSearch(theTerm, resultNumber);
                    console.log("")
                    runPrompt();
                });
                
        });

    } else {
        console.log("Invalid choice");
        console.log("")
        runPrompt();
    }

    
  });
  
}
module.exports = runPrompt;