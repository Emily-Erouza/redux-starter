function myFunction (number){
    return number * Math.random();
}
// its not pure func becoz everytime we call it . msth,rsndom it generate the new value, the result of this value is going to change


function myFunction (number){
    return number * 2;
    // its pure func becoz w=evrytime we call it and give it 1(number) it gets 2
}

function isEligible (age){
    return age > minAge;
    // this func it takes the age of some1 and comapre to minAge. And minAge ids not defined is global variable.
}

function isEligible (age,minAge){
    return age > minAge;
//    to make a func pure u need to pass a minAge as Parameter
}