/*### Task-1
Access the `golden rod` color value in output.

*/
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

const goldenColor = colors['golden rod']
console.log(goldenColor);

/*
### Task-2
For this object below add a property named `passenger capacity` with value 5


*/

/* */
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    "passenger capacity": 5,
};

const passenger = car["passenger capacity"];
console.log(passenger);

/* 
### Task-3
Display the physics marks as output.
```js
*/

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks);


/*
### Task-4

Count the `number of properties`.

**Input:**
<br>
```js
*/

let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const countOfProperty = Object.keys(student1);
console.log(countOfProperty);

//**Output:**
 //4
