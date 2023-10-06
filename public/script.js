(async function() {
   
console.log("Engineering Training");

const modalButton = document.getElementById("modalButton");
console.log("modalButton " + modalButton.outerHTML);

const modalContainer = document.getElementById("modalContainer");

//document.getElementById("modalButton").addEventListener("click",initModalButton);
//let dataLoaded = false;


const utils = {
   loadData: async function (callback) {
         const response = await fetch('/getJiraTickets');
         const data = await response.json();
         console.log('data', data);
     setTimeout(function (){
     utils.renderData().then((response)=> {
      let listElement = document.getElementsByClassName("grid-container");
         listElement.innerHTML = response;
         modalContainer.classList.toggle("hidden");
         return response;
         //dataLoaded=true;
      });
      console.log("data loaded");
    },1000);
    callback();
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

function initModalButton(){
   return new Promise((resolve)=>{
      let dataLoaded = false;
      modalButton.addEventListener("click", ()=>{
         if (dataLoaded == true ){
            return;
         }
         console.log("button clicked!");
         modalContainer.classList.toggle("hidden");
         utils.loadData(()=>{
            resolve();
            dataLoaded = true;
            });
         }
   )}
)};

const closeModalButton =  document.getElementsByClassName("close-modal-button");
console.log("closeModalButton", closeModalButton);

closeModalButton[0].addEventListener("click", () => {
      console.log("clicked close modal button!");
      modalContainer.classList.toggle("hidden")
});
//____________________________________________________________
const jirasArray = [];


 

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


console.log("BEFORE initModalButton is called");
await initModalButton();
console.log("AFTER initModalButton is called");
});

