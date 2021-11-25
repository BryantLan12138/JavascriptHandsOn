const items = document.querySelectorAll('li');
const ul = document.querySelector('ul');
// NodeList
console.log(items)

const button = document.querySelector('button')
button.addEventListener('click', () => {
    // create element by using createElement()
    const li = document.createElement('li');
    li.textContent = 'something to be added';

    // add new element at bottom
    // ul.append(li);

    // add new element at top
    ul.prepend(li);
})

items.forEach(item => {
    item.addEventListener('click', Event => {
        // console.log(Event);

        // change the css
        // Event.target.style.textDecoration = 'line-through';

        // remove the element
        Event.target.remove()
    })
});