const form = document.querySelector('.signup-form');
const input = document.querySelector('#username');
// console.log(form)
form.addEventListener('submit', (e) => {
    // stop refreshing
    e.preventDefault();
    console.log(e);
    console.log(input.value);
});