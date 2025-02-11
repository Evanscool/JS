function printOutput(message) {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML += message + "<br>"; 
}

let Name = "Evan";
printOutput("My first name is: " + Name);

let age = 18;
printOutput("My age is: " + age );

let IsStudent = true;
printOutput("I am a student: " + true );

const PI = 3.14159;
printOutput("the value of PI is " + PI);

let favoritecolors = ["violet, red, and aqua"];
printOutput("my favorite colors are " + favoritecolors);

let person = {
  name: "Evan",
  age: 18,
  City: "Forest lake"
};
printOutput("person Object: " + JSON.stringify(person));

if (age >= 18) {
console.log("You are an adult.");
printOutput("you are an adult.");
} else {
console.log("You are a minor.");
printOutput("you are an minor.");
}



function greet(name) {
printOutput("Hello, " + name + "!");
}
greet("Evan"); 

let globalVar = "I'm global";

function myFunction() {
let localVar = "I'm local";
printOutput(globalVar); 
printOutput(localVar); 
}

function calculateArea(length, width){
return length * width;
}

myFunction(); 

for (let i = 0; i < 5; i++) {
printOutput(i); 
}

let i = 0;
while (i < 5) {
printOutput(i); 
i++;
}

for(let i = 0; i < favoritecolors.length; i++){
printOutput(favoritecolors[i]);
}

for(let i = 1; i <=10; i++) {
  printOutput(i);
}

printOutput(Math.random() *9 + 1);

printOutput(new Date());

printOutput(Name.toUpperCase());