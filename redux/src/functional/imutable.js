
// // we have book object and its title
// let book ={title: "Harry Porter"};

// // we have a function of publish its gets its book object and sets its publish is true
// function publish(book){
//     book.ispublished = true;
// }
// // we call its function
// publish(book);
// console.log(book)

// import{Map} from 'immutable';

// let book = Map({title: "Harry Porter"});

// console.log(book.get("title"))
// results  harry porter

import{Map} from 'immutable';

let book = Map({title: "Harry Porter"});

function publish(book){
   return book.set("ispublished", true) ;
}

book = publish(book);

console.log(book.get("title"))
console.log(book.toJS())
// results {title: "Harry Porter", ispublished", true}