//...........................FUNCTION..................................
//............................Q1.......................................


function all(){
    alert("Hello World")""
}

all()

//............................Q2.......................................

function currentDate(){
    var date = new Date()
    console.log(date)
}

currentDate()
//............................Q3.......................................

function greet (){
    var firstName = "Saad"
    var lastName = "Ahmed"
    alert(firstName + " " + lastName)
}

greet()
//............................Q4.......................................

function sum(res){
    var firstNum = +prompt("Enter Sum Of First Number")
    var SecondNum = +prompt("Enter Sum Of Second Number")
    var result = firstNum + SecondNum
    return result

}

console.log(sum())

//............................Q5.......................................

function operator(num1,num2,opp){
    var opp = prompt("Enter Operation What do you want to perform")
switch (opp) {

    case "+":
   return num1 + num2;

    case "-":
     return   num1 - num2;

     case "*":
        return   num1 * num2;

        case "/":
            return   num1 / num2;

        default: return num1 + num2;
    }

}
console.log(operator(5,7))

//............................Q6.......................................

function square(a,b) {

    return Math.pow(a,b=2)

}

square(8)

//............................Q7.......................................

function factoral(n) {
    if (n == 0 || n == 1) {
        return 1
    }
    else {
       return n * factoral(n - 1)
    }
}

console.log(factoral(4))

//............................Q8.......................................

function counting(){
    var firstNum = prompt("Enter First Number Start Of The Counting")
    var lastNum = prompt("Enter last Number End Of The Counting")
    for(var i = firstNum; i <= lastNum; i++){
        console.log(i)
    }
}
counting()


//............................Q9........................................

function calculateHypotenuse(){
    var base = prompt("Enter Base Value")
    var per = prompt("Enter Perpendicular Value")


function calculateSquare(value){
      var value = value * value
      return value
}
    var result = base + per
    return result
}

console.log(calculateHypotenuse())


//............................Q10.......................................

function arr() {
    var array = []
    var length = prompt("Enter Variable Length")
    for (var i = 0; i < length; i++) {
    array.push(prompt("Enter Value"))
}
   return array
}

document.write(arr())

//............................Q11.......................................

function largestNum(firstNum , SecondNum){
    if(firstNum > SecondNum){
        return firstNum
    }
    else{
        return SecondNum
    }
   
}

document.write(largestNum(30,50))

//............................Q12.......................................

function calculateArea(){
    var width = prompt("Enter Area Width")
    var height = prompt("Enter Area Height")
    var area = width * height
    return area
}
console.log(calculateArea())

//............................Q13.......................................

function sortedArray(){
    var arrLength = prompt("Enter Array Length")
    var array = []
    for(var i =0; i < arrLength; i++){
        array.push(prompt("Enter Index Of " + i))
    }
    array = array.sort();
    return array
}

document.write(sortedArray())

//............................Q14.......................................

var array = [5,2,4,9,12]
var result = 0
function sum(){
   for(var i =0; i < array.length; i++){
    result += array[i]
   }
   return result
}

console.log(sum())
//............................Q15.......................................
// //............................Q16.......................................

function power(){
    var num = prompt("Enter Your Number")
    return num * num * num
}

console.log(power())

//............................Q17.......................................

function dice(){
    var diceValue = Math.ceil(Math.random() * 6)
    return diceValue
}

console.log(dice())

//............................Q18.......................................

var x = 32243;

function reverse(){
    x = x + ""
  return  x.split("").reverse().join("")
}
console.log(reverse())
//............................Q19.......................................

function palandrom(){
    var userInput = prompt("Enter Text")
    var reverseText = ''
   
for(var i =userInput.length -1; i >= 0; i--){
    reverseText += userInput[i]
}
   if(userInput == reverseText){
    console.log("Palandrom")
   }
   else{
    console.log("Not a palandrom")
   }
}
console.log(palandrom())



