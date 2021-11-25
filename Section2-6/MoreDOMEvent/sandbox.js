// copy event
const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    alert('do not copy my copyrights')
})

// mousemove event
const box = document.querySelector('.box');
box.addEventListener('mousemove', e =>{
    box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
});

// whele event
document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});