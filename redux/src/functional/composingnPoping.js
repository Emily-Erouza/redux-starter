import {compose,pipe} from 'lodash/fp'

let input = 'javascript';
// we get the input trim and wrap it inside a div element. so we declare another variable 'output' we add opening element next we add our trimmed input 
// and finaly closing element this is a non-functional style 
let output = '<div>' + input.trim() + '</div>'

// how to solve the problm using functional programing techniques

const trim = str => str.trim(); // declare a const trim and it takes a string 'str' and returns the trimmed string
const wrapInDiv = str => '<div>'  + str + '</div>'
// wrap div it takes a str it doesnt care a str is trmmed or not ,it only wrap a str inside a div Element,
// so here we can add expression like  this div plus str plus slash div

const wrapIndiv = str => `<div> ${str}</div>`
// instead of usinf quotes  use back tick charecter and we difine a template. we add our div Element now in the middle we add we want to render the string dynamically
// so add a dollar sign and wrap it with braces and wit these we can render dynamically
const toLowerCase = str => str. toLowerCase();

const transform = compose(wrapInDiv,toLowerCase,trim);// it read/start form left to right
const transfor = pipe(trim,toLowerCase,wrapInDiv);
transform(input)

