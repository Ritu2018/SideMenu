window.onload=function(){
let icon=document.querySelector(".icon");
let social=document.querySelector(".social");
let about=document.querySelector(".about");
let mc=new Hammer(icon);
mc.on("panright",display);
function hide(){
    social.style.top="-100%";
    about.style.left="-100%";
    window.removeEventListener("click",hide);

}
function display(){
     social.style.top="0%";
    about.style.left="0%";
window.addEventListener("click",hide);
}

}