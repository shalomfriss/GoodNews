const news          = require('gnews');
const terminalLink  = require('terminal-link');
const ora           = require('ora');

const showHeadlines = async (num = 10) => {
    const spinner = ora('Loading headlines\n').start();
    spinner.color = 'cyan';
  
    const results = await news.headlines({n : num});
    spinner.succeed();
  
    showResults(results)
    
  }

  const showTopic = async (theTopic, resultNumber) => {
    const spinner = ora('Loading ' + theTopic + ' stories\n').start();
    spinner.color = 'cyan';

    const results = await news.topic(theTopic, {n : resultNumber});
    spinner.succeed();

    showResults(results)
  }

  const searchGeo = async (location, resultNumber) => {
    const spinner = ora('Loading ' + location + ' stories\n').start();
    spinner.color = 'cyan';

    const results = await news.geo(location, {n : resultNumber});
    spinner.succeed();

    showResults(results)
  }

  const newsSearch = async (searchTerm, resultNumber) => {
    const spinner = ora('Searching for ' + searchTerm + '\n').start();
    spinner.color = 'cyan';
  
      var theNum = resultNumber 
      if(!resultNumber) {
        theNum = 10
      }
      
      const results = await news.search(`${searchTerm}`, {n : theNum});
      spinner.succeed();
      
      showResults(results)
  }

  const showResults = (results) => {
    var count = 1
    for (let article of results) {
      // console.log("-------------------")
      // console.log(article.pubDate);
      // console.log(Date(article.pubDate));
      let lineNumber = count.toString().padStart(results.length.toString().length, "0") + ") ";
      const link = terminalLink(lineNumber + article.pubDate + " : " + article.title, article.link);
      console.log(link);
      count += 1
    }
  }
  module.exports = {
    showHeadlines,
    newsSearch,
    showTopic,
    searchGeo
};

