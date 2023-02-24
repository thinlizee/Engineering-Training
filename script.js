console.log("Engineering Training");

const modalButton = document.getElementById("modalButton");
console.log("modalButton " + modalButton.outerHTML);

const modalContainer = document.getElementById("modalContainer");

document.getElementById("modalButton").addEventListener("click",myEvent);

function myEvent(modelContainer) {
   console.log("clicked button!")
    modalContainer.classList.toggle("hidden")
};

 
const closeModalButton =  document.getElementsByClassName("close-modal-button");
console.log("closeModalButton", closeModalButton);

const listCollection = document.getElementsByClassName("close-modal-button");

let i=0; 
   listCollection.item(i).addEventListener("click", () => {
      console.log("clicked close modal button!")
      const modalContainer = document.getElementById("modalContainer")
      modalContainer.classList.toggle("hidden")
});


