import{produce } from 'immer';
import { initial } from 'lodash';

 let book ={title: "Harry Porter"};

// we have a function of publish its gets its book object and sets its publish is true
function publish(book){
    // initial state
   return produce(book,draftBook => {
        draftBook.ispublished = true;
    });
}
// we call its function
let updated = publish(book);
console.log(book)
console.log(updated)
// results  harry porter
// results {title: "Harry Porter", ispublished", true}