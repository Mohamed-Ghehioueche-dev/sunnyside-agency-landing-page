let openBtn=document.querySelector('#open-nav');
let navBar=document.querySelector('.nav-lis');


openBtn.addEventListener('click', ()=>{
  navBar.classList.toggle('active');
})