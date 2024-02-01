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


/*
### Task-2: 
Count how many times a string has the letter `a` or `A`
*/

let count2 = 0;
const text = "lorem, All my troubles seemed so far away.  Did you mean to ask for a pangram? A pangram is a sentence that contains every letter of the alphabet at least once. If "
const textFormated = text.toLowerCase();
for (let i = 0; i<=textFormated.length; i++){
      if (textFormated[i] == 'a'){
            count2++;
      }
}
console.log(count2);

