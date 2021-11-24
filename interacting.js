/* grab single element */
// first p element

// const para = document.querySelector('p');

// const para = document.querySelector('body > h1');

// console.log(para.innerHTML)

// /* grab multiple elements */

// const paras = document.querySelectorAll('p');
// // console.log(paras)
// paras.forEach(para =>{
//     console.log(para)
// })


// get an element by ID

// const element = document.getElementById('error-message');
// console.log(element)

// get elements by className

// const elements = document.getElementsByClassName('error');
// console.log(elements)

// get elements by tag name

// const paras = document.getElementsByTagName('p');
// console.log(paras)
// console.log(paras[0])

// override old text

// const para = document.querySelector('p');
// console.log(para.innerHTML)
// para.innerHTML = 'Bryant is so handsome!'


// override multple texts by tag

const paras = document.querySelectorAll('p');
paras.forEach(para =>{
    para.innerHTML = 'Bryant is handsome!'
})

const content = document.querySelector('.content');

// const people = ['leyi', 'tu', 'su'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}<p>`
// })

console.log(content.getAttribute('class'));
// content.setAttribute('class', 'monkey');
// console.log(content.getAttribute('class'));
content.setAttribute('style', 'color: green;')
content.style.margin = '50px';