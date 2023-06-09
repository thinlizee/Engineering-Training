console.log("Engineering Training");

const modalButton = document.getElementById("modalButton");
console.log("modalButton " + modalButton.outerHTML);

const modalContainer = document.getElementById("modalContainer");

document.getElementById("modalButton").addEventListener("click",openEvent);

let dataLoaded = false;

let jiraTemplate = {icon: "bi bi-check-circle-fill"};
let errorJiraTemplate = {icon: "bi bi-x-circle"};

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

const utils = {
   loadData: function (){
      setTimeout(function (){
     utils.renderData().then((response)=> {
      let listElement = document.getElementsByClassName("grid-container");
         listElement.innerHTML = response;
         modalContainer.classList.toggle("hidden");
         dataLoaded=true;
      });
      console.log("data loaded");
    },1000);
    },

   renderData: function(){
      return new Promise((resolve) => {
   let response = '';
   let listElement = document.getElementsByClassName("grid-container");
   
    jirasArray.forEach((element) => {
      let { link, title, icon } = element;            
         response += `<li class="grid-container"><i class="${icon}"></i><a href="${link}">${title}</a></li>`;  
      //response += `<li class="grid-container"><i class="bi bi-check-circle-fill"></i><a href="${link}">${title}</a></li>`;   
      /* let listItem = document.createElement("li");
         listItem.innerHTML = `<li class="item"><a href=${element.link}>
      <i class="bi bi-check-circle-fill"></i>${element.title}</a>
      </li>`;
      listElement[0].append(listItem);
     }); */
     listElement[0].innerHTML = response;   // accessing the DOM only once vs multiple iterations
     resolve(response);
   });
   })
   }
};

function openEvent() {
   if (dataLoaded === true )
   { 
     return; 
   }
   console.log("clicked button!")
   utils.loadData();
   modalContainer.classList.toggle("hidden");
};
 
const closeModalButton =  document.getElementsByClassName("close-modal-button");
console.log("closeModalButton", closeModalButton);

closeModalButton[0].addEventListener("click", () => {
      console.log("clicked close modal button!");
      modalContainer.classList.toggle("hidden")
});
//____________________________________________________________
const jirasArray = [];

class jiraHandler {
   constructor(links, title ) {
     this.links = links;
     this.title = title;
     this.jirasObj = [];
     this.createJiraObject();
   }
   createJiraObject(){
      for (let i = 0; i < this.titles.length; i++) {
      let icon =  getIcon()
         this.jirasObj.push({
         link: this.links[i],
         title: this.titles[i],
         ...icon
      });
   }
      return this.jirasObj;
}};

function getIcon() {
   let rNum = getRandomIntInclusive(0,2);
   return rNum == 1 ? jiraTemplate : errorJiraTemplate;
 }
//___________________________________________________________

for (let i=0; i< jiraTitles.length; i++) {
   const jirasObj = {
      title: jiraTitles[i],
      link: jiraLinks[i],
    };
   
    const icon = getIcon();
    Object.assign(jirasObj, icon);

jirasArray.push(jirasObj);
console.log("jirasObj : " , jirasObj);
};

for (let i = 0; i < jiraTitles.length; i++) {
 console.log(jiraTitles[i]);
};

for (let i = 0; i < jiraLinks.length; i++) {
 console.log(jiraLinks[i]);
};

function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
 }

