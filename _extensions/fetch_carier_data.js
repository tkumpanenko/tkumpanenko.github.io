var config = {
  scrapUrl: "https://careerseurope.danielwellington.com/jobs?department_id=21328&location_id=",
  baseUrlForJobs: "https://careerseurope.danielwellington.com/",
  dataFilePath: "./data/carrier.yaml",
  selector: ".jobs-section .jobs-section-inner .jobs li"
}

var http = require("http");
var fs = require('fs');
var cheerio = require('cheerio');
var request = require("request");
var yaml = require("write-yaml");

var jobs = [];

request({
  uri: config.scrapUrl
}, function(error, response, body) {
  if (error === null) {
    $ = cheerio.load(body);

    $(config.selector).each(function(i, elem) {
      var item = { href: '',title: '', location: ''};
      item.href = config.baseUrlForJobs + $(this).find('a').attr('href');
      item.title = $(this).find('.title').text();
      item.location = $(this).find('.meta').text();
      jobs.push(item);
    });

    var data = {
      vacancies: jobs
    }

    yaml(config.dataFilePath, data, function(err) {
      if (err) {
          console.log(err);
        } else {
          console.log('Jobs fetching completed!');
        }
    });
  } else {
    console.log("Error: it's not possible to fetch lastest jobs.");
  }



});
