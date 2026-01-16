console.log("Loops and Functions in JS");

/*
let n = 5;
for (i=0 ; i<n ; i++){
    console.log(i);
}
const object = {
    a : 1,
    b : 2,
    c : 3
}
for (i in object){
    console.log(i)                      //Practice
    console.log(object[i])
}
for (i of "Nida"){
    console.log(i)
}
*/

//Program to print marks of a student in object using for loop

const obj = {
    "studentA": 916,
    "studentB": 846,
    "studentC": 811
}
for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log("marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]]);
}
// above using for in loop
for (const key in obj) {
    console.log("Marks of " + key + " are " + obj[key]);
}


//printing try again until user enters correct number

CorrectNumber = 11;
let e;
while (e != CorrectNumber) {
    e = prompt("Enter correct number(11):");
    console.log("Try again")
}


//Function to find mean of 5 numbers
function MeanFunc(a, b, c, d, e) {
    sum = a + b + c + d + e;
    mean = sum / 5;
    return mean;
}
MeanFunc(15, 25, 65, 45, 35);
console.log(`mean of given numbers is ${mean}`);
