const navbar = document.querySelector('nav');
const menuButton = navbar.querySelector('button');
const menuLinks = document.getElementById('menu-links');
const contactAnchor = menuLinks.querySelector('#anchor-about');
const aboutAnchor = menuLinks.querySelector('#anchor-contact');
const backdrop = document.getElementById('backdrop');
const closeBtn = backdrop.querySelector('.btn-close');
menuButton.addEventListener('click', ()=>{
    // menuLinks.classList.toggle("visible");
    backdrop.classList.toggle("visible");
})
closeBtn.addEventListener('click', ()=>{
// alert('clicked');
    backdrop.classList.toggle('visible');
})

aboutAnchor.addEventListener('click', ()=>{
    //  alert('clicked');
    backdrop.classList.toggle("visible");
})
contactAnchor.addEventListener('click', ()=>{
    //  alert('clicked');
    backdrop.classList.toggle("visible");
})