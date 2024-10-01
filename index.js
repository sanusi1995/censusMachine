/* 
let myAge = 29;

console.log(myAge); */

/* let humanAge = 14;
let humanDogRation = 7;

let humanDog = humanAge / humanDogRation;

console.log(humanDog);
 */

/* let bonusPoint = 50;
console.log(bonusPoint)

 bonusPoint = bonusPoint + 50;
 console.log(bonusPoint)
 
bonusPoint = bonusPoint - 75 
console.log(bonusPoint)

bonusPoint = bonusPoint + 45;
console.log(bonusPoint); */

//NOW LETS CODE

/* function increment() {
    console.log("Now I GOT IT")
} */

/* function samTin(){
    console.log(42)
}
 */
/* samTin(); */
/* 
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

let totalLaps = lap1 + lap2 + lap3;


function totalTime(){
    console.log(totalLaps);
}

totalTime(); */

/* let lapCounter = 0;

function totalLaps(){
    lapCounter = lapCounter + 1;
}

totalLaps();
totalLaps();
totalLaps();
totalLaps();
totalLaps();
console.log(lapCounter)
 */

/* 
let myName = "Samson";
let greeting = "Hi, how are you doing today";

let myGreeting = greeting + " " + myName + "?";

console.log(myGreeting); */
 
const counterIncrease = document.getElementById("count-el");

let count = 0;

function increment(){
  count += 1;
  counterIncrease.textContent = count;
  console.log(counterIncrease)
}

let saveEL = document.getElementById("save-el");
                                    
function save(){
    let countStr = " " + count + " - ";
    saveEL.textContent += countStr;
    console.log(count);

    counterIncrease.textContent = 0;
    count = 0;

}


