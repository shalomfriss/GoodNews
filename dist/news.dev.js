"use strict";

//Kudos: https://github.com/DatanewsOrg/google-news-js
//https://github.com/sindresorhus/terminal-link
var news = require('gnews');

var Parser = require('rss-parser');

var terminalLink = require('terminal-link');

var readline = require("readline");

var parser = new Parser();
var HEADLINES_RSS = 'https://news.google.com/news/rss';
var TOPICS_RSS = 'https://news.google.com/news/rss/headlines/section/topic/';
var GEO_RSS = 'https://news.google.com/news/rss/headlines/section/geo/';
var SEARCH_RSS = 'https://news.google.com/rss/search?q=';
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var main = function main() {
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          rl.question("What news should I search for? (hit enter for the latest 10 headlines): ", function (searchTerm) {
            if (searchTerm == undefined || !searchTerm) {
              showHeadlines();
              rl.close();
              return;
            }

            rl.question("How many results should I show? (hit enter for 10): ", function (resultNumber) {
              newsSearch("".concat(searchTerm), "".concat(resultNumber));
              rl.close();
            });
          });
          rl.on("close", function () {});

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

var showHeadlines = function showHeadlines() {
  var heads, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, article, link;

  return regeneratorRuntime.async(function showHeadlines$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('Headlines');
          _context2.next = 3;
          return regeneratorRuntime.awrap(news.headlines({
            n: 10
          }));

        case 3:
          heads = _context2.sent;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context2.prev = 7;

          for (_iterator = heads[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            article = _step.value;
            link = terminalLink(article.pubDate + " : " + article.title, article.link);
            console.log(link);
          }

          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](7);
          _didIteratorError = true;
          _iteratorError = _context2.t0;

        case 15:
          _context2.prev = 15;
          _context2.prev = 16;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 18:
          _context2.prev = 18;

          if (!_didIteratorError) {
            _context2.next = 21;
            break;
          }

          throw _iteratorError;

        case 21:
          return _context2.finish(18);

        case 22:
          return _context2.finish(15);

        case 23:
          process.exit(0);

        case 24:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[7, 11, 15, 23], [16,, 18, 22]]);
};

var newsSearch = function newsSearch(searchTerm, resultNumber) {
  var theNum, results, count, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, article, link;

  return regeneratorRuntime.async(function newsSearch$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          theNum = resultNumber;

          if (!resultNumber) {
            theNum = 10;
          }

          _context3.next = 4;
          return regeneratorRuntime.awrap(news.search("".concat(searchTerm), {
            n: theNum
          }));

        case 4:
          results = _context3.sent;
          count = 1;
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context3.prev = 9;

          for (_iterator2 = results[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            article = _step2.value;
            link = terminalLink(count.toString().padStart(resultNumber.toString().length, "0") + ") " + article.pubDate + " : " + article.title, article.link);
            console.log(link);
            count += 1;
          }

          _context3.next = 17;
          break;

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](9);
          _didIteratorError2 = true;
          _iteratorError2 = _context3.t0;

        case 17:
          _context3.prev = 17;
          _context3.prev = 18;

          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }

        case 20:
          _context3.prev = 20;

          if (!_didIteratorError2) {
            _context3.next = 23;
            break;
          }

          throw _iteratorError2;

        case 23:
          return _context3.finish(20);

        case 24:
          return _context3.finish(17);

        case 25:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[9, 13, 17, 25], [18,, 20, 24]]);
};

main();