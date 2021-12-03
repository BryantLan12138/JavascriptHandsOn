// it is much more clear to chain promise by using async & await keywords 
const request = async () => {
    const tmp = await fetch('test1.json');
    const data = await tmp.json();
    return data;
}

console.log(1)
console.log(2)
request().then(data => {
    console.log('resolved:' , data);
})
console.log(3)
console.log(4)
