
// forloop
for (let x = 0; x < 10; x++ ){
    console.log(x);
}


// while loop

let i = 0;

while (i < 10) {
    console.log(`while loop num. ${i}`);
    i++;
}

const todos = [
    { 
        id : 1, 
        text : "Go to work",
        iscompleted : false
    },
    { 
        id : 2,
        text : "take out the bins",
        iscompleted : true
    }
];

const jsonformat = JSON.stringify(todos);
console.log(jsonformat);

console.log("\n")

// loop through it
// forloop 1
for (let i = 0; i < todos.length; i++) {
    console.log(`forloop 1: ${todos[i]}`);
};

console.log("\n")

// forloop 2
for (let x of todos) {
    console.log(`forloop2: ${x.text}`);
};
console.log("\n")

// for each
todos.forEach(function(todo) {
console.log(`foreach: todo ${todo.text}`)
});


// map

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText) //will return as an array(list)


// filter and map
const todocompleted = todos.filter(function(todo){
    return todo.iscompleted == true;
}).map(function(todo){
    return todo.text;
});


console.log(`Completed todo ${todocompleted}`)