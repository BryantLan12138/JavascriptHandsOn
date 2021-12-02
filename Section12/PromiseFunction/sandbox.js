const asyncfunction = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                // console.log(request.responseText);
                let data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4) {
                // console.log('The API endpoint is not correct');
                reject('error getting data');
            }
        });
        
        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('GET', resource)
        request.send();
    });
    
};

// call single promise function
asyncfunction('test1.json').then(data => {
    console.log(data)
}).catch((err) =>{
    console.log(err)
})

// Promise Dummy example
// const promiseFunction = () => {
//     return new Promise((resolve, reject) => {
//         resolve('resolve');
//         reject('reject');
//     })
// };

// promiseFunction().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })