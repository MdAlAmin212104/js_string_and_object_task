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


/*
### Task-3: 

Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 

*/

let text1 = "lorem, All my troubles seemed so far away.  Did you mean to ask for a pangram? A pangram is a sentence that contains every letter of the alphabet at least once. If "
const textFormated1 = text1.toLowerCase();
for (let i = 0; i<textFormated1.length; i++){
      if ( 'a' && 'e' && 'i' && 'o' && 'u' == textFormated1[i] ){
            console.log("found");
      }
      
}


/* 
### Task-4: 
If a given string has either x, replace x by y. if the given string has X, replace it by Y.

    Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
*/

const stringToReplace = "loremx ipsum dolorX sixt Xamet, exit consecteturX";
const output = stringToReplace.replaceAll("X", "Y").replaceAll("x", "y");
console.log(output);


/*
---
### Task-5:
Capitalize Every first Letter of each word in a String


*/
const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}


console.log(words.join(" "));