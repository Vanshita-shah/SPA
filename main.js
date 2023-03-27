import HomeContent from "./Home.js";
import AboutContent from "./About.js";
import ImagesContent from "./Images.js";
import ServicesContent from "./Services.js";


const container=document.querySelector(".container");
const contentContainer=document.querySelector(".content-section");
// contentContainer.innerHTML="Home"+Content;
console.log(window.location.pathname); 
const content={
    "/Home" : HomeContent,
    "/About" : AboutContent,
    "/Images" : ImagesContent,
    "/Services" : ServicesContent
}
container.addEventListener('click',(e)=>{
    console.log(e.target);
    window.location.pathname="/Home";
    window.history.pushState(content,null,'http://127.0.0.1:5500');
    console.log(window.location.pathname); 
    // document.body.innerHTML+=HomeContent;
    // location.href+="#Home"
})