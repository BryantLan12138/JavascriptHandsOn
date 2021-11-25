const button = document.querySelector('button');
const popup = document.querySelector('div.popup-wrapper');
const close = document.querySelector("div.popup-close");
console.log(popup);
button.addEventListener('click', () => {
    popup.style.display = "block";
})

close.addEventListener('click', ()=> {
    popup.style.display = "none";
})

popup.addEventListener('click', ()=> {
    popup.style.display = "none";
})