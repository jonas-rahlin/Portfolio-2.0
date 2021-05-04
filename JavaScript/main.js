
const imgA = document.getElementById("project-img__a");
const imgB = document.getElementById("project-img__b");
const imgC = document.getElementById("project-img__c");
const imgD = document.getElementById("project-img__d");

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