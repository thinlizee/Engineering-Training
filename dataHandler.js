const { Octokit } = require("@octokit/rest");
require('dotenv').config()
var JiraApi = require('jira-client');

const errorJiraTemplate = { icon: 'bi bi-x-circle' };
const jiraTemplate = { icon: 'bi bi-check-circle-fill' };

let jiraNums = [];
class DataHandler {
    constructor(links, title ) {
      this.links = links;
      this.title = title;
      this.jirasObj = [];
      this.createJiraObject();
      this.fetchGitHubData();
    } 
    createJiraObject() { 
      for (let i = 0; i < this.title.length; i++) {
      let icon =  getIcon()
         this.jirasObj.push({
         link: this.links[i],
         title: this.title[i],
         ...icon
      });
     }
     return this.jirasObj;
    } 
  async fetchGitHubData() {
   const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
    });

   try {
    const response = await octokit.rest.repos.listCommits({
      owner: "thinlizee",
      repo: "engineering-training",
    });

    for (let i = 0; i < response.data.length; i++) {
      const regex = /[A-Z][A-Z]+-\d+/g;
      const ticketNum = response.data[i].commit.message.match(regex);

      if (ticketNum !== null && jiraNums.indexOf(ticketNum[0]) == -1) {
        jiraNums.push(ticketNum[0]);
      }
    }
  } 
   catch (error) {
    console.log("Error getting data:", error.message);
  } 
  console.log(jiraNums);
}
}

function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

let jiraLinks = ['https://totalwine.atlassian.net/browse/TT-2',
'https://totalwine.atlassian.net/browse/TT-16',
'https://totalwine.atlassian.net/browse/TT-17',
'https://totalwine.atlassian.net/browse/TT-18',
'https://totalwine.atlassian.net/browse/TT-19'
];
console.log('Jira Links', jiraLinks);

let jiraTitles = ['Create a public repository under your GitHub account',
'Create a new script file, and import it into index.html and add a console log',
'JavaScript: Variables',
'JavaScript: Event Listeners - Add Toggle Button Inside of Modal',
'JavaScript: Functions - Write a function to toggle hidden class on modal'
];
console.log('Jira Titles', jiraTitles);

function getIcon() {
  let rNum = getRandomIntInclusive(0,2);
  return rNum == 1 ? jiraTemplate : errorJiraTemplate;
};

const dataHandler = new DataHandler(jiraLinks, jiraTitles);
module.exports = dataHandler;

const octokit = new Octokit({ 
  auth: process.env.GITHUB_TOKEN,
  baseUrl: 'https://api.github.com',
  log: {
      debug: () => {},
      info: () => {},
      warn: console.warn,
      error: console.error
  },
  request: {
      agent: undefined,
      fetch: undefined,
      timeout: 0
  }
});

var jira = new JiraApi({
  protocol: "https",
  host: "totalwine.atlassian.net",
  username: process.env.JIRA_USERNAME,
  password: process.env.JIRA_TOKEN,
  apiVersion: "2",
  strictSSL: true,
});

jira
  .findIssue('TT-140')
  .then(function(issue) {
    console.log('Status: ' + issue.fields.status.name);
  })
  .catch(function(err) {
    console.error(err);
  });