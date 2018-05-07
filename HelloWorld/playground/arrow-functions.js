// var square = (x) => {
//     var result = x*x;
//     return result;
// };
var square = (x) => x*x;
console.log(square(9));

var user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(arguments);
        console.log(`hi Im ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`hi Im ${this.name}`);
    }
};

user.sayHiAlt(1,2,3);