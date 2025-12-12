
let body = document.querySelector("body");
let main = document.querySelector("main");
let dark_mode = document.getElementById("dark-mode");
let light_mode = document.getElementById("light-mode");

dark_mode.addEventListener("click", function(){
    body.classList.toggle("body")
    body.classList.remove("body1")
})

light_mode.addEventListener("click", function(){
    body.classList.add("body1");
    body.classList.remove("body");
    
})


const menuBtn = document.querySelector('.menu-btn');
const menuOverlay = document.getElementById('menuOverlay');

menuBtn.addEventListener('click', () => {
  menuOverlay.classList.toggle('active');
});

// إغلاق المنيو لما تضغط في أي مكان خارجها
menuOverlay.addEventListener('click', (e) => {
  if (e.target === menuOverlay) {
    menuOverlay.classList.remove('active');
  }
});