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

