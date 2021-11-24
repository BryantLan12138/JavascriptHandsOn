// const greet = function() {
//     return 'hello bryant';
// }

// const greet = () => 'hello bryant';
const greet = () => {
   return 'hello bryant';
}

let word = greet();
alert(word)

// const bill = function(product, tax) {
//     let price = 0;
//     for(let i = 0; i < product.length; i++) {
//         price += product[i] + product[i] * tax;
//     }
//     return price;
// }

const bill = (product, tax) => {
    let price = 0;
    for(let i = 0; i < product.length; i++) {
        price += product[i] + product[i] * tax;
    }
    return price;
}

console.log(bill([10, 15, 30], 0.2))


let people = ['zhang3', 'li4', 'wang5'];
people.forEach(function(person){
    console.log(person)
})


let user = {
    name: 'bryant',
    age: 23,
    gender: 'male',
    blogs: ['blog1', 'blog2'],
    login: ()=> {
        console.log('the user has logged in')
    },
    viewBlog: function() {
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    },
    viewBlog1() {
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

console.log(user.name)
console.log(user['age'])
user.login();
user.viewBlog();
user.viewBlog1();