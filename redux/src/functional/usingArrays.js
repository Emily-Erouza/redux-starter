import { replace } from "lodash";

const number = [1,2,3];

// Adding
 const added = [...number,4];

//   if u wnt to put it in postion 2
const index = number. indexOf(2);

// copy items number before 2 and add new item
const add = [...number.slice(0,index),4,...number.slice(index)];// slice reurns a new array
console .log(add);
// result 1,4,2,3

// removing 2  and add all the elemt excpet 2
const removed = number.filter (n => n !== 2) ;
console.log(removed);
// results 1,3

// updating
// if u want to replace 2 with 20
const updated= number.map(n => n ===2 ? 20 : n);// if n equals 2 and return 20 otherwise we return n
console.log(updated)
// results 1,20,3