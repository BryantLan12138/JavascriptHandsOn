const items = document.querySelectorAll('li');

// NodeList
console.log(items)

items.forEach(item => {
    item.addEventListener('click', Event => {
        // console.log(Event);
        Event.target.style.textDecoration = 'line-through';
    })
});