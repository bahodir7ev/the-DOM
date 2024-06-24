const searchBtn = document.querySelector('.navigator-btn1');
const runBtn = document.querySelector('.navigator-btn2');
const modalClose = document.querySelector('.modal-close');
const menuModal = document.querySelector('.modal');
const modalBg = document.querySelector('.modal-bg')
const text = document.querySelector('.modal__text');

searchBtn.addEventListener('click', function() {
    menuModal.classList.add('open');
    modalBg.classList.add('open');
    text.innerText = "Whoa! You found me!"
    modalClose.innerText = "Hide Back";
})

runBtn.addEventListener('click', function() {
    menuModal.classList.add('open')
    text.innerText = "Please don't run!"
    modalClose.innerText = "Close";
    modalBg.classList.add('open');
})

window.addEventListener('keydown', function(e) {
    if(e.key === "Escape") {
        menuModal.classList.remove('open')
    }
})

modalClose.addEventListener('click', function () {
    if(menuModal.classList.contains('open')) {
        menuModal.classList.remove('open')
    }
    modalBg.classList.remove('open')
})

modalBg.addEventListener('click', function () {
    if(menuModal.classList.contains('open')) {
        menuModal.classList.remove('open')
    }
    modalBg.classList.remove('open')
})