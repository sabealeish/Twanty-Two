const cards = document.querySelectorAll('.cl-cards');
const next_btn = document.querySelectorAll('.next-btn');
const pre_btn = document.querySelectorAll('.pre-btn');
cards.forEach((item, i) =>{
    let cotaint = item.getBoundingClientRect();
    let continerwithe = cotaint.width;

    next_btn[i].addEventListener('click',() => {
        item.scrollLeft -= continerwithe;
    } )
    pre_btn[i].addEventListener('click',() => {
        item.scrollLeft += continerwithe;
    } )
})
// mobile navbare
const openMenuo = document.querySelector('.open-menu');
 const navbar = document.querySelector('.list-1').querySelectorAll('a');

 navbar.forEach(items => {
    items.addEventListener('click', function(){
        navbar.forEach(nav => nav.classList.remove('active_nav'))
         this.classList.add('active_nav');     })
 })
openMenuo.addEventListener('click', navTolge);
function navTolge(){
    const nav = document.querySelector('.menuo-mobile');
    nav.classList.add('show-mnuo-mobile');
    
}

const closeMenuo = document.querySelector('.close-mnuo').querySelector('i');
closeMenuo.addEventListener('click', navclos);
function navclos(){
    const nav = document.querySelector('.menuo-mobile');
    nav.classList.remove('show-mnuo-mobile');
    
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
