let logo = document.querySelector(".options-pages")
logo.addEventListener('click', alternate)


let isOpen = true;
function alternate() {
    isOpen ? openBar() : closeBar();
}

function openBar() {
    const nav = document.querySelector(".pages")
    nav.style.top = "15%"
    animation()
    isOpen = false

}
function closeBar() {
    const nav = document.querySelector(".pages")
    nav.style.top = "0%"
    returnAnimation()
    isOpen = true

}

function animation() {
    let hamburguer = document.querySelectorAll('rect')
    hamburguer[0].style.rotate = '45deg';
    hamburguer[0].style.y = '-1';
    hamburguer[0].style.x = '2';
    hamburguer[1].style.fill = "transparent"
    hamburguer[2].style.rotate = '-45deg'
    hamburguer[2].style.y = '25';
    hamburguer[2].style.x = '-25';


}
function returnAnimation() {
    let hamburguer = document.querySelectorAll('rect')
    hamburguer[0].style.rotate = '0deg';
    hamburguer[1].style.fill = "#fff"
    hamburguer[2].style.rotate = '0deg'
    hamburguer[2].style.y = '30';
    hamburguer[2].style.x = '0';
}