

const fs = require("fs");

const person1 = {
  fname: "ahmed",
  lname: "hossam",
  age: 20,
  city: "alex",
};

console.log(person1);

const person1JSON = JSON.stringify(person1);
console.log(person1JSON);

fs.writeFileSync("datas.json", person1JSON);
console.log(fs.readFileSync("datas.json").toString());
const person1Obj =JSON.parse(person1JSON);
console.log(person1Obj) ;


  person1.fname="adel",
  person1.lname="ahmed",
  person1.age=40,
  person1.city="cairo"

console.log(person1);
const person2JSON = JSON.stringify(person1);
console.log(person2JSON);

fs.writeFileSync("datas.json", person2JSON);