

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


class jiraHandler {
    constructor(links, title ) {
      this.links = links;
      this.title = title;
      this.jirasObj = [];
      this.createJiraObject();
    }};   
    async function createJiraObject() { 
      for (let i = 0; i < this.titles.length; i++) {
      let icon =  getIcon()
         this.jirasObj.push({
         link: this.links[i],
         title: this.titles[i],
         ...icon
      });
      return this.jirasObj;
   }; 


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
 }
}

