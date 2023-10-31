// greet and sayhello are called higher oder function

function greet (fn){
    console.log(fn());
}

function sayhello(){
    return function(){
        return 'hello world';
    }
    
}
let fn =sayhello();// if we call hello, we are going to get a function back 
let message = fn()


let number =[1,2,3];
// map takes a function as an argument
number.map(number => number * 2)