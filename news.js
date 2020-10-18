//Kudos: https://github.com/DatanewsOrg/google-news-js
//https://github.com/sindresorhus/terminal-link
const Parser        = require('rss-parser');
const readline      = require("readline");
const shell         = require("shelljs");
const program       = require("commander");
const chalk         = require("chalk");
const boxen         = require("boxen");


const runPrompt = require('./lib/questions');

const parser        = new Parser();

const HEADLINES_RSS = 'https://news.google.com/news/rss';
const TOPICS_RSS    = 'https://news.google.com/news/rss/headlines/section/topic/';
const GEO_RSS       = 'https://news.google.com/news/rss/headlines/section/geo/';
const SEARCH_RSS    = 'https://news.google.com/rss/search?q=';

program.version('1.0.0');
program.option('-n, --headlines <num>', 'Show top n headlines');
program.option('-t, --topic <topic>', 'Show a topic');
program.option('-l, --list', 'Show a list of topics');
program.parse(process.argv);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



if(program.headlines) {
  console.log('headlines')
  showHeadlines(program.headlines);
  return  
}

if(program.list) {
  for(var x in TOPICS) {
    console.log(TOPICS[x]);
  }
  return  
}

const handleEscKeypress = () => {
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', chunk => {
    if (chunk === '\u001b') {
      // ESC
      process.exit(0);
    }
  });
};
handleEscKeypress();

runPrompt();

