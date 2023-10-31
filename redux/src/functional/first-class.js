// function sayhello(){
//     return 'hello world'
// }

// let fn =sayhello;// if we call a function it will return as a String. we want to pass a refernce to it
// // fn()
// // sayhello()
// // fn is an alians to say hello 

// // we can also pass a function as an argument to another function
// function greet(fnMessage){ // a greet function take a function as a parameter amd call it over to console log
//     console.log(fnMessage());
// }

// greet(sayhello);// it a pass a Reference to sayhello function

// now we return a function
function sayhello(){
    return function(){
        return 'hello world';
    }
    
}
let fn =sayhello();// if we call hello, we are going to get a function back 
let message = fn()