// there is 2 data group types;  primitives and references

// primitives includes
// str, number, boolean, undefined, null

let name = "erfan"; //string
let age = 16; //int
let isapproved = true; //Boolean
let firstname; // undefined
let lastname = undefined; //undefined
let selectedcolor = null; //null


//                             reference

// object
// Array
// Fucntion

// obj  -- like dict in python
let object_example = {
    name: "erfan",
    age: 16
};

// change object properties
object_example.name = "F1"

// change object properties using bracket notation
object_example["name"] = "NewName"

console.log(object_example);
// str concatenation
console.log(object_example.name,"is", object_example.age, "years old")
// template string concatenation
console.log(`my name is erfan ${object_example.name} and i am ${object_example.age}`);

// assign object values too a variable

let {name} = object_example; // make a name var and pulls name from object_example and assing it to name var
let {age} = object_example;

// Array
let selectedcolours = ["red", "blue"];

console.log(selectedcolours[0]);
//adding 3rd item
selectedcolours[2] = "Yellow"
console.log(selectedcolours.length);

