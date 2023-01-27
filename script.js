console.log("Engineering Training");

const modalButton = document.getElementById("modalButton");
console.log("modalButton " + modalButton.outerHTML);

const modalContainer = document.getElementById("modalContainer");

document.getElementById("modalButton").addEventListener("click",myEvent);

function myEvent(modelContainer) {
   console.log("clicked button!")
    modalContainer.classList.toggle("hidden")
};



