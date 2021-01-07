var hamburgerMenu
var slideNumber = 1
var screenSize = screen.width;
var productImages=document.querySelectorAll('.productPagina main section:first-of-type article img')
var nextProduct=document.querySelector('.productPagina main section:first-of-type a:last-of-type')
var prevProduct=document.querySelector('.productPagina main section:first-of-type a:first-of-type')

showImage()

nextProduct.addEventListener('click',  oneUpImg)
prevProduct.addEventListener('click',  oneDownImg)

function oneUpImg(){
    slideNumber++
    if(slideNumber > productImages.length){slideNumber=1}
    showImage()
}

function oneDownImg(){
    slideNumber--
    if(slideNumber < 1){slideNumber = productImages.length}
    showImage()
}

function showImage(){
    var i;
    for (i=0; i < productImages.length; i++) {
        productImages[i].classList.add('show'); 
    }
    productImages[slideNumber-1].classList.remove('show')
}



hamburgerMenu=document.getElementById('buttonClick')

hamburgerMenu.addEventListener('click', openHamburgerMenu)

let menuIsOpen=document.querySelector('header nav ul')    

function openHamburgerMenu(){
    menuIsOpen.classList.toggle('menuOpen')
}