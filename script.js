console.log("Engineering Training");

const modalButton = document.getElementById("modalButton");
console.log("modalButton " + modalButton.outerHTML);

const modalContainer = document.getElementById("modalContainer");

document.getElementById("modalButton").addEventListener("click",openEvent);

let dataLoaded = false;

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

class jiraHandler {
   constructor(links, title) {
     this.links = links;
     this.title = title;
   }
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

const jirasArray = [];

for (let i=0; i< jiraTitles.length; i++) {
   const jiraObj = { 
         title : jiraTitles[i],  
         link : jiraLinks[i]
}
jirasArray.push(jiraObj);
console.log("jiraObject : " , jiraObj);
};

//const jiraHandler = new JiraHandler(jiraLinks, jiraTitles);

for (let i = 0; i < jiraTitles.length; i++) {
 console.log(jiraTitles[i]);
};

for (let i = 0; i < jiraLinks.length; i++) {
 console.log(jiraLinks[i]);
};


const utils = {
   loadData(){
      setTimeout(function (){
     utils.renderData().then((response)=> {
      let listElement = document.getElementsByClassName("grid-container");
         listElement.innerHTML = response;
         modalContainer.classList.toggle("hidden");
         dataLoaded=true;
      });
      console.log("data loaded");
    })
    },

   renderData(){
      return new Promise((resolve) => {
   let response = '';
   let listElement = document.getElementsByClassName("grid-container");
   
    jirasArray.forEach((element) => {
      let { links, title } = element;    //destructuring/deconstructing object into variables
         response +=                   // concatenating a string vs appending a child to the DOM          
         `<li class="item"><a href=${links}>
         <i class="bi bi-check-circle-fill"></i>${title}</a>
         </li>`;         
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
