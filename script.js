const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("navMenu");
menuBtn.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex"});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{if(innerWidth<=700)nav.style.display="none"}));
window.addEventListener("resize",()=>{if(innerWidth>700)nav.style.display="flex";else nav.style.display="none"});
