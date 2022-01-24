const menubtn=document.querySelector('.menu-btn');
const rightnav=document.querySelector('.right-nav-pages');
const main=document.querySelector(".main")

menubtn.addEventListener('click',()=>{
    menubtn.classList.toggle('open');
    document.querySelector('.line1').classList.toggle('open');
    document.querySelector('.line2').classList.toggle('open');
    document.querySelector('.line3').classList.toggle('open');
    rightnav.classList.toggle('open');
})



const filtersbtn=document.querySelector('.filters-btn');
filtersbtn.addEventListener('click',()=>{
    main.classList.toggle('filter-open');
})