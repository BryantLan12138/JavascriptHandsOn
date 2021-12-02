// fetch api is much more easier to code than XMLHTTPRequest object and maintain
fetch('test1.json').then(response => {
    console.log('resolve', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log('some error happened')
})