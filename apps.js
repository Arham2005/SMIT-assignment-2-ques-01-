function createAdder(num) {
    return function (x) {
        return x + num;
    };
}
const add5 = createAdder(5);
console.log(add5(10));  
console.log(add5(20)); 
console.log(add5(30)); 
console.log(add5(40)); 