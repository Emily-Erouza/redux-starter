let name='Mosh';
let newName = name.toUpperCase();

let book = {};
book.title = '' ;
// arrays and strings are not immutable

// function person ={name:'john'};
// const updated=Object.assign({},person,{name:'bob', age:23});
// console.log(updated);
// the result it will show this {name:'bob', age:23}

// function person ={
//     name:'john'
// };
// const updated = {...person, name:'bob'};
// // ... are spread operator
// console.log(updated);
// // the result it will show this name:'bob'

function person= {
    name:"John"
    adress:{
    country: "Usa",
    // city:"San fransco"
}
};
const updated = {
    ...person, 
    adress:{
        ...person.adress, 
        city: "new york" 
    },
    name:'bob'
};

console.log(person);