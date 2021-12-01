const form = document.querySelector('.quiz-form');
const result = document.querySelector('span');
const block = document.querySelector('.result');
console.log(block);
const correctAnswer = ['B', 'B', 'B', 'B', 'B'];
form.addEventListener('submit', e => {
    // stop refreshing the page when user clicks the button
    e.preventDefault();

    let score = 0;
    // block.setAttribute("class", "result py-4 bg-light text-center");
    block.classList.remove('d-none');
    let userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    userAnswer.forEach((answer, index) => {
        if(answer === correctAnswer[index]) {
            score += 20;
            // result.textContent = score + '%';
        }
    })
    // result.textContent = `${score}%`; 

    let output = 0;
    let timer = setInterval(()=>{
        result.textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        }else {
            output++;
        }
    }, 50);
    // scroll window to the top
    scrollTo(0, 0);

})