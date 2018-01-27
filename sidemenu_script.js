/*windowoonload is used for activating all reference call after creating those in html*/
window.onload=function(){
let sidemenu_icon=document.querySelector(".sidemenu_icon");
let sidemenu_social=document.querySelector(".sidemenu_social");
let sidemenu_about=document.querySelector(".sidemenu_about");
let sidemenu_blur=document.querySelector(".sidemenu_blurbg");
/*Above were all the calls for DOM reference*/
let sidemenu_mc=new Hammer(sidemenu_icon);
sidemenu_mc.on("panright tap",display);
/*Using hammer.js gave the touch feeling to the icon.Tap is also given for pc and for ease*/
/*Below functions alternatively used for opening and closing*/
/*Noticed i didnot used display:none or hidden for hiding the tab instead made it outside the visible zone for the entry animation*/
function hide(){
    sidemenu_social.style.top="-100%";
    sidemenu_about.style.left="-100%";
    sidemenu_blur.style.display="none";
    sidemenu_blur.removeEventListener("click",hide);
}
function display(){
    sidemenu_social.style.top="0%";
    sidemenu_about.style.left="0%";
    sidemenu_blur.style.display="block";
    sidemenu_blur.addEventListener("click",hide);
}

}

