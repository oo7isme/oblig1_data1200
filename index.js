const ifmTobias = document.getElementById("tobias") 
const ifmPatch = document.getElementById("patchaya")  
const ifmEmil = document.getElementById("emil")  
const ifmAlex = document.getElementById("alexander")  
const ifmHaroon = document.getElementById("haroon")   
const mainPage = document.getElementById("main")

function toggle(elementId){
    const element = document.getElementById(elementId);
    ifmTobias.style.display = "none";
    ifmPatch.style.display = "none";
    ifmEmil.style.display = "none";
    ifmAlex.style.display = "none";
    ifmHaroon.style.display = "none";
    mainPage.style.display = "none";
    
    if(element.style.display === 'none'){
        element.style.display = "block";
    } 
    else {
        element.style.display = "none";
    }
    console.log("toggle")
}