console.log("Engineering Training");

const modalButton = document.getElementById("modalButton");
console.log("modalButton " + modalButton.outerHTML);

const modalContainer = document.getElementById("modalContainer");

document.getElementById("modalButton").addEventListener("click",myEvent);

function myEvent() {
   console.log("clicked button!")
    modalContainer.classList.toggle("hidden")
};

 
const closeModalButton =  document.getElementsByClassName("close-modal-button");
console.log("closeModalButton", closeModalButton);


   closeModalButton[0].addEventListener("click", () => {
      console.log("clicked close modal button!")
      const modalContainer = document.getElementById("modalContainer")
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

jirasArray.forEach((element) => {
   let listItem = document.createElement("li");
   let listElement = document.getElementById("grid-container");

   let templateLiterals = `<li class="item"><a href=${element.link}>
   <i class="bi bi-check-circle-fill"></i>${element.title}</a>
   </li>`;

   listItem.innerHTML = templateLiterals;
   listElement.append(listItem);
   console.log("jira: ", element);
});