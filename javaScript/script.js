var hamburgerMenu

hamburgerMenu=document.getElementById('buttonClick')

hamburgerMenu.addEventListener('click', openHamburgerMenu)

let menuIsOpen=document.querySelector('div:first-of-type')    

function openHamburgerMenu(){
    menuIsOpen.classList.toggle('menuOpen')
}
