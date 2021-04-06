const a = "erfan:mahmoodi";

console.log(a.split(':')); // will return the value inside an array(list)
const firstname = a.split(':')[0];
const uppercaseName = firstname.toUpperCase()

console.log(firstname)
console.log(`Name in upper case ${uppercaseName}`);