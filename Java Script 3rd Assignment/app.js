// ............................Q1.....................................

var userInput = prompt("Enter Your Name ? ......")

alert("Hii, " + userInput)

// ............................Q2.....................................

var userInput = +prompt("Enter Number")

if(userInput < 1 ){
    document.write(5 + " x 1 = " + 5*1 + "<br>")
    document.write(5 + " x 2 = " + 5*2 + "<br>")
    document.write(5 + " x 3 = " + 5*3 + "<br>")
    document.write(5 + " x 4 = " + 5*4 + "<br>")
    document.write(5 + " x 5 = " + 5*5 + "<br>")
    document.write(5 + " x 6 = " + 5*6 + "<br>")
    document.write(5 + " x 7 = " + 5*7 + "<br>")
    document.write(5 + " x 8 = " + 5*8 + "<br>")
    document.write(5 + " x 9 = " + 5*9 + "<br>")
    document.write(5 + " x 10 = " + 5*10  + "<br>")
}
else{
    document.write(userInput + " x 1 = " + userInput*1 + "<br>")
    document.write(userInput + " x 2 = " + userInput*2 + "<br>")
    document.write(userInput + " x 3 = " + userInput*3 + "<br>")
    document.write(userInput + " x 4 = " + userInput*4 + "<br>")
    document.write(userInput + " x 5 = " + userInput*5 + "<br>")
    document.write(userInput + " x 6 = " + userInput*6 + "<br>")
    document.write(userInput + " x 7 = " + userInput*7 + "<br>")
    document.write(userInput + " x 8 = " + userInput*8 + "<br>")
    document.write(userInput + " x 9 = " + userInput*9 + "<br>")
    document.write(userInput + " x 10 = " + userInput*10  + "<br>")
}


// ............................Q3.....................................

var city = prompt("Enter city name?")

if (city == "Karachi") {
    alert("Welcome to city of lights")
} else {
    alert("Welcome to city of " + city)
}

// ............................Q4.....................................

var gender = prompt("What's your gender?")

if (gender == "male") {
    alert("Good Morning Sir!")
} else if (gender == "female"){
    alert("Good Morning Ma'am!")
} else {
    alert("Error! Please either write 'male' or 'female'")
}

// ............................Q5.....................................

var userInput = prompt("Enter color of traffic signal?......")

if(userInput == 'red'){
    document.write("Vehicle must stop !")
}

else if(userInput == 'yellow'){
    document.write("vehicles should get ready to move ")
}
else(
    document.write("vehicles can move now")
)


// ............................Q6.....................................

var maxAge = prompt("Enter your max age")
var age = prompt("Enter your age")

if (age <= maxAge) {
    alert("You are welcome")
}


// ............................Q7.....................................

var userInput = prompt("Enter fuel? ........")

if(userInput < 0.25){
    alert("Please refill the fuel on your car !")
}

// ............................Q8.....................................

a. True
b. False
c. True
d. True
e. if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
f. if("car" < "cat"){
    alert("car is smaller than cat");
    }

// ............................Q9.....................................

var totalNum = +prompt("Enter Total Number Of Each Paper")
    var english = +prompt("Enter English Marks")
    var Urdu = +prompt("Enter Urdu Marks")
    var Math = +prompt("Enter Math Marks")
    var totalMarks = totalNum * 3
    var marksObtained = english + Urdu + Math

    var percentage = marksObtained / totalMarks * 100

    if(percentage >= 80 ){
        document.write("A+")
    }
    else if(percentage >= 70){
        document.write("A")
    }
    else if(percentage >= 60){
        document.write("B")
    }
    else if(percentage >= 50){
        document.write("C")
    }
    else{
        document.write("Fail")
    }


// ............................Q10.....................................

var userInput = prompt("Enter Name of item 1")
var userInput2 = prompt("Enter Name of item 2")
var userInput3 = +prompt("Enter price of item 1")
var userInput4 = +prompt("Enter price of item 2")
var userInput5 = +prompt("Enter quantity of item 1")
var userInput6 = +prompt("Enter quantity of item 2")
var shipping = 250

var total = userInput3 * userInput5 + userInput4 * userInput6 + shipping
var per10 = total * 10 / 100

if(total > 2000){
    document.write(total - per10 + " After 10% Discount ")
}
else{
    document.write(total)
}

// ............................Q11.....................................

var secretNum = 6
var userInput = prompt("Enter Number")

if(userInput == secretNum){
    alert("Bingo ! Your answer is correct")
}
else{
    alert("Wrong answer")
}

// ............................Q12.....................................

var userInput = +prompt("Enter Number")

if(userInput % 3 == 0){
    alert(userInput + " is divisible by 3")
}
else{
    alert("Not divisible by 3")
}


// ............................Q13.....................................

var pak = prompt("Enter Pakistan Score?......")
var afg = prompt("Enter Afghsnstan score?.....")

if(pak > afg){
    alert("Pakistan has won the match")
}
else if(pak == afg){
    alert("Match has tie")
}
else{
    alert("Afghanistan has won the match")
}

// ............................Q14.....................................

var string = "Pakistan"
var number = 92
var boolean = true

if(string == "Pakistan"){
    alert("Pakistan is a string")
}
else if(number == 92){
    alert("92 is a number")
}
else {
    alert("true is a boolean")
}

// ............................Q15.....................................

var num = prompt("Enter Number")
if(num % 2 == 0){
    alert(num + " is Even Number")
}
else{
    alert(num + " is Odd Number")
}

// ............................Q16.....................................

var temperature = prompt("Enter temperature")
if(temperature > 40){
    alert("It is a hot outside")
}
else if(temperature > 30){
    alert("The weather today is normal")
}
else if(temperature > 20){
    alert("Today weather is cool")
}
else {
    alert("OMG ! today weather is so cool")
}

// ............................Q17.....................................


var userInput = prompt("Enter first number")
var userInput2 = prompt("Enter second number")
var operator = prompt("Enter operator what do you want + - x  / ")
if(operator == "+"){
    alert(+userInput + +userInput2)
}
else if(operator == "-"){
    alert(userInput - userInput2)
}
else if(operator == "*"){
    alert(userInput * userInput2)
}
else if(operator == "/"){
    alert(userInput / userInput2)
}
else{
    alert(userInput % userInput2)
}

// ............................Q18.....................................

var userInput = prompt("Enter day name")

if(userInput == "Monday"){
    alert("It's a week day")
}
else if(userInput == "Tuesday"){
    alert("It's a week day")
}
else if(userInput == "Wednesday"){
    alert("It's a week day")
}
else if(userInput == "Thursday"){
    alert("It's a week day")
}
else if(userInput == "Friday"){
    alert("It's a week day")
}
else if(userInput == "Saturday"){
    alert("It's weekend")
}
else if(userInput == "Sunday"){
    alert("Yay ! it's holiday")
}
else{
    alert("This is not a day name")
}
// ............................Q19.....................................

var userInput = prompt("Enter your score")
if(userInput > 50){
    alert("You are passed")
}
else{
    alert("Try again")
}

// ............................Q20.....................................

var a = prompt ("Enter Num")
if (a >= 1){
alert("Positive Num")
}

else if(a <= -1){
    alert("Negative Num")
}
else{
    alert("not")
}

// ............................Q21.....................................
var userInput = prompt("Enter number")
var userInput2 = prompt("Enter noun")
alert(userInput + " " + userInput2)




















































