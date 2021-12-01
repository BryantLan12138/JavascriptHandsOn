const request = new XMLHttpRequest();
console.log(request)
request.addEventListener('readystatechange', () => {
    if(request.readyState === 4) {
        console.log(request.responseText);
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();