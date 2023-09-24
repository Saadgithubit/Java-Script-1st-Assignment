//....................................Q1.............................................................

var num = prompt("Enter Number")

console.log("Number: " + num)
console.log("Round off value: " + Math.round(num))
console.log("Floor value: " + Math.floor(num))
console.log("Ceil value: " + Math.ceil(num))

//....................................Q2.............................................................

var num = prompt("Enter Negative Number")

console.log("Number: " + num)
console.log("Round off value: " + Math.round(num))
console.log("Floor value: " + Math.floor(num))
console.log("Ceil value: " + Math.ceil(num))

//....................................Q3.............................................................

var num = prompt("Enter Positive floating Point Number")

console.log("Number: " + num)
console.log("Round off value: " + Math.round(num))
console.log("Floor value: " + Math.floor(num))
console.log("Ceil value: " + Math.ceil(num))

//....................................Q4.............................................................

var num = prompt("Enter Negative floating Point Number")

console.log("Number: " + num)
console.log("Round off value: " + Math.round(num))
console.log("Floor value: " + Math.floor(num))
console.log("Ceil value: " + Math.ceil(num))

//....................................Q5.............................................................
//....................................Q6.............................................................

console.log("Random dice value:" + Math.ceil(Math.random() * 6))
console.log("Random dice value:" + Math.ceil(Math.random() * 6))

//....................................Q7.............................................................

var coin = Math.ceil(Math.random()* 2)

if(coin == "2"){
    console.log("Heads")
}
else{
    console.log("Tails")
// }

//....................................Q8.............................................................

var coin = Math.ceil(Math.random()* 100)

console.log("Random Number Between 1 & 100: " + coin)

//....................................Q9.............................................................

var weight = prompt("Enter Your Weight?.....")



console.log("The Weight Of User is " + weight + " Kilograms")

//....................................Q10.............................................................

var secretNumber = 7
var userInput = prompt("Enter NUmber Between 1 to 10")

if(secretNumber == userInput){
    console.log("Conratulations You Are Win")
}
else{
    console.log("Try Again")
}

