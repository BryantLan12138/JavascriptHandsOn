const asyncfunction = ((resource, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            // console.log(request.responseText);
            let data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if(request.readyState === 4) {
            // console.log('The API endpoint is not correct');
            callback('API gate not reacheable', undefined);
        }
    });
    
    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.open('GET', resource)
    request.send();
});

// asyncfunction();

// callback hell, nesting too much callback functions, need to use Promise 
asyncfunction('test1.json', (err, data) => {
    console.log('callback fired')
    if(err === undefined) {
        console.log(data)
    } else {
        console.log(err)
    }
    asyncfunction('test2.json', (err, data) =>{
        console.log('callback fired')
        if(err === undefined) {
            console.log(data)
        } else {
            console.log(err)
        }
        asyncfunction('test3.json', (err, data) =>{
            console.log('callback fired')
            if(err === undefined) {
                console.log(data)
            } else {
                console.log(err)
            }
        });
    });
});