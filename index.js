const welcome=document.querySelector(".welcome");
const btn=document.querySelector("button");

const next=()=>{
    welcome.classList.add('move-up');
    btn.classList.add('start');
};

document.addEventListener("keyup",(e)=>{
    if(e.key== "Enter"){
    next();
    console.log("clicked");
    }
});

btn.addEventListener("click",()=>{
   window.location.href='quiz.html';
});

