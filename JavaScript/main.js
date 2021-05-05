//Get Project Images
const imgA = document.getElementById("project-img__a");
const imgB = document.getElementById("project-img__b");
const imgC = document.getElementById("project-img__c");
const imgD = document.getElementById("project-img__d");

//Set event Listeners for Project Images & set GIF on hover
imgA.addEventListener("mouseover", () =>{
    imgA.src = "../Assets/Projects Pictures/servants.gif";
})

imgA.addEventListener("mouseleave", () =>{
    imgA.src = "../Assets/Projects Pictures/servants-s.png";
})

imgB.addEventListener("mouseover", () =>{
    imgB.src = "../Assets/Projects Pictures/apples.gif";
})

imgB.addEventListener("mouseleave", () =>{
    imgB.src = "../Assets/Projects Pictures/apples-s.png";
})

imgC.addEventListener("mouseover", () =>{
    imgC.src = "../Assets/Projects Pictures/cebeko.gif";
})

imgC.addEventListener("mouseleave", () =>{
    imgC.src = "../Assets/Projects Pictures/cebeko-s.png";
})

imgD.addEventListener("mouseover", () =>{
    imgD.src = "../Assets/Projects Pictures/badass.gif";
})

imgD.addEventListener("mouseleave", () =>{
    imgD.src = "../Assets/Projects Pictures/badass-s.png";
})

//Initiate AOS Library
AOS.init({
    duration: 1200,
  })