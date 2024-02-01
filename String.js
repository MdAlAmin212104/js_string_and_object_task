/*
### Task-1: 
Count how many times a string has the letter `a`

*/
let count = 0;
let myString = "Yesterday, all my troubles seemed so far away";
for (let i = 0; i<=myString.length; i++){
    //console.log(myString[i])
    if (myString[i] == "a"){
        count++
    }
    
}
console.log( count);
