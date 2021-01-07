var hamburgerMenu
var screenWidth
var winkelwagen
var slideNumber = 1
var slideImages=document.querySelectorAll('.index main section:first-of-type article')
var slideNext=document.querySelector('.index main section:first-of-type a:last-of-type')
var slidePrev=document.querySelector('.index main section:first-of-type a:first-of-type')

showImage()

slideNext.addEventListener('click', oneUp)
slidePrev.addEventListener('click', oneDown)

function oneUp(){
    slideNumber++
    if(slideNumber > slideImages.length){slideNumber=1}
    showImage()
}

function oneDown(){
    slideNumber--
    if(slideNumber < 1){slideNumber = slideImages.length}
    showImage()
}

function showImage(){
    var i;
    for (i=0; i < slideImages.length; i++) {
        slideImages[i].classList.add('show'); 
    }
    slideImages[slideNumber-1].classList.remove('show')
}

hamburgerMenu=document.getElementById('buttonClick')

hamburgerMenu.addEventListener('click', openHamburgerMenu)

let menuIsOpen=document.querySelector('header nav ul')    

function openHamburgerMenu(){
    menuIsOpen.classList.toggle('menuOpen')
}

