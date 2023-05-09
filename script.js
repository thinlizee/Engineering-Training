console.log("Engineering Training");

const modalButton = document.getElementById("modalButton");
console.log("modalButton " + modalButton.outerHTML);

const modalContainer = document.getElementById("modalContainer");

document.getElementById("modalButton").addEventListener("click",openEvent);

function loadData() { setTimeout(() => {
   renderData();
   console.log("data loaded");
 }, 1000)
 };


function openEvent() {
   console.log("clicked button!")
   loadData();
   modalContainer.classList.toggle("hidden");
};


 
const closeModalButton =  document.getElementsByClassName("close-modal-button");
console.log("closeModalButton", closeModalButton);


   closeModalButton[0].addEventListener("click", () => {
      console.log("clicked close modal button!");
      modalContainer.classList.toggle("hidden")
});

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

for (let i = 0; i < jiraTitles.length; i++) {
 console.log(jiraTitles[i]);
};

for (let i = 0; i < jiraLinks.length; i++) {
 console.log(jiraLinks[i]);
};

const jirasArray = [];

for (let i=0; i< jiraTitles.length; i++) {
   const jiraObj = { 
         title : jiraTitles[i],  
         link : jiraLinks[i]
}
jirasArray.push(jiraObj);
console.log("jiraObject : " , jiraObj);
};

function renderData(){
jirasArray.forEach((element) => {
   let listItem = document.createElement("li");
   let listElement = document.getElementsByClassName("grid-container");
  
   listItem.innerHTML = `<li class="item"><a href=${element.link}>
   <i class="bi bi-check-circle-fill"></i>${element.title}</a>
   </li>`;

   listElement[0].append(listItem);
  });
  modalContainer.classList.toggle("hidden");
};