const parent = document.querySelector('article');
console.log(parent)

// HTMLCollection
console.log(parent.children);

// convert HTMLCollection to Array
console.log(Array.from(parent.children));

// Array can use forEach method add each child node a class name 'child'
Array.from(parent.children).forEach(child => {
    child.classList.add('child');
});

const title = document.querySelector('h2');
console.log(title);

// view its parent 
console.log(title.parentElement);
console.log(title.parentElement.parentElement);

// view its siblings
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);
