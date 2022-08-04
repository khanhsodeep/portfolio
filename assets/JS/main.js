const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tablink = $$(".tablink");
const section = $$(".section");
const dark = $("#darkmode");
const home = $(".home");
const icon = $("#icon");


function opebTabs(event, menu){

     for(let i =0; i<section.length;i++){
         section[i].style.display = "none";
     }
 
     for(let i =0; i<tablink.length;i++){
         tablink[i].className = tablink[i].className.replace("active","")
     }
    document.getElementById(menu).style.display="block";
     event.currentTarget.className += " active";
     
}
function darkmode(){
    home.classList.toggle("home-dark");

}

document.getElementById("active").click();

