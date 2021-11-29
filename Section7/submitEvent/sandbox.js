const form = document.querySelector('.signup-form');
const input = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
// console.log(form)
form.addEventListener('submit', (e) => {
    // stop refreshing
    e.preventDefault();
    console.log(e);
    console.log(input.value);

    // regex 
    const regex = /^[a-z]{6,}$/;

    // two methods to validate the input with regex
    let result = regex.test(input.value);
    console.log(result);
    if(result) {
        console.log('pass the test');
        feedback.textContent = "The username is validated";
    } else {
        console.log('fail the test');
        feedback.textContent = "You cannot use the username";
    }

    // 2nd method
    // let result = input.value.search(regex);
    // if(result != -1) {
    //     console.log('pass the test');
    // } else {
    //     console.log('fail the test');
    // }
});