// ................................FOR LOOPS..............................................
// ....................................Q1................................................

for(var i =0; i < 5; i++){
    document.write("Hello World ")
}

// ....................................Q2................................................

for(var i =1; i < 11; i++){
    document.write(i + "<br>")
}

// ....................................Q3................................................

var num = prompt("Enter Number")
var tableLength = prompt("Enter Table Length")

for(i=1; i<=tableLength; i++){
    document.write(num + " x " + i + " = " + num * i + "<br>")
}
// ....................................Q4................................................

var mobile = ['Nokia','Samsung', 'Apple', 'Sony', 'Huawei']

for(i=0; i< mobile.length; i++){
    document.write(mobile[i] + "<br>")
}

// ....................................Q5................................................

var fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Stawberry']


for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>")
}

for (i = 0; i < fruits.length; i++) {
    document.write('Element at index ' + i + " " + fruits[i] + '<br>')
}


// ....................................Q6................................................

var userInput = +prompt("Enter Number of items")
var arr = []

for(i=0; i < userInput; i++){
   arr.push(prompt("Enter value"))

}
document.write(arr)
// ....................................Q7................................................
document.write("Counting: <br>")
for (i = 1; i <= 15; i++) {
    document.write(i + " ")
}
document.write("<br> Reverse counting: <br>")
for (i = 10; i >= 1; i--) {
    document.write(i + " ")
}
document.write("<br> Even: <br>")
for (i = 0; i <= 20; i += 2) {
    document.write(i + " ")
}
document.write("<br> Odd: <br>")
for (i = 1; i <= 20; i += 2) {
    document.write(i + " ")
}
document.write("<br> Series: <br>")
for (i = 2; i <= 20; i += 2) {
    document.write(i + "k ")
}
// ....................................Q8................................................

var cakes = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"]
var userInput = prompt("Welcome to abc Bakery , What do you want to order sir/mam")
var cakesFound = false

for (i = 0; i < cakes.length; i++) {

    if (cakes[i] == userInput) {
        document.write(userInput + " is available at index " + i + " in our bakery")
        cakesFound = true

        break
    }
}
if (cakesFound == false) {
    document.write("We are sorry sir. " + userInput + " is not available in our bakery")
}

// ....................................Q9................................................

var num = [24,53,78,91,12]
var largestNum = num[0]

for(i=0; i<num.length; i++){
    if (num[i] > largestNum){
        largestNum = num[i]
    }
}
document.write("Array item: " + num + "<br>")
document.write("The Largest Number is " + largestNum)

// ....................................Q10................................................

var num = [24,53,78,91,12]
var smallestNum = num[0]

for(i=0; i<num.length; i++){
    if (num[i] < smallestNum){
        smallestNum = num[i]
    }
}
document.write("Array item: " + num + "<br>")
document.write("The Largest Number is " + smallestNum)

// ....................................Q11................................................

var num = [24,53,78,91,12]
var largestNum = num[0]
var smallestNum = num[0]

for(i=0; i<num.length; i++){
        if (num[i] > largestNum){
            largestNum = num[i]
        }
    }

for(i=0; i<num.length; i++){
    if (num[i] < smallestNum){
        smallestNum = num[i]
    }
}


    document.write("Array item: " + num + "<br>")
    document.write("The Largest Number is " + largestNum + "<br>")
    document.write("The Largest Number is " + smallestNum)


// ....................................Q12................................................

for(i=5; i <= 100; i+=5){
    document.write(i + " ")
}
// ....................................Q13................................................

var students = ["Ali","Sami","Taha","Inam"]
var scores = [58,73,89,90]


document.write(students[0] +" "+ scores[0] + "<br>")
document.write(students[1] +" "+ scores[1] + "<br>")
document.write(students[2] +" "+ scores[2] + "<br>")
document.write(students[3] +" "+ scores[3])
// ....................................Q14................................................

var scores = [12, 45, 3, 22, 34, 50]
var stop = +prompt("Enter stop value")

for (i = 0; i < scores.length; i++){


}
for(i = 0; i <= scores.indexOf(stop); i++){
        document.write (scores[i] + " ")
}

// ....................................Q15................................................

var arr = [[1,2,3],[4,5,6],[7,8,9]]


for (var i = 0; i < arr.length; i++){
    nestedArray= arr[i]

    var line = ''
        for(var j =0; j< nestedArray.length; j++){

            line += nestedArray[j]



    }
    console.log(line)
}

// ....................................Q16................................................


var userInput = prompt("Enter Number")
for(i = userInput; i > 0; i-=0.5)
document.write(i + ", ")
// ....................................Q17................................................

for (i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + " is even" + "<br>")
    }
    else if (i % 1 == 0) {
        document.write(i + " is odd" + "<br>")
    }

}
// ....................................Q18................................................


var odd = 1

for (i = 1; i <= 7; i+=2){
     odd = odd * i
}
document.write("The Product of odd integars from 1 to 7 is " + odd)

// ....................................Q19................................................

var userInput = prompt("Enter Initial Numbers Of Stars?.....")

for(var i =userInput.length; i > 0; i--){

    console.log(userInput.slice(0,i))
}

// ....................................Q20................................................
// ........................a...........................
var stars = "*****"

for (var i = 0; i < 5; i++) {
       console.log(stars , "<br>")
}
// ........................b...........................

var star = "*****"

for (var i = 1; i <= star.length; i++){
    console.log(star.slice(0,i))
}

// ........................c...........................

var star = "*****"

for (var i = star.length; i > 0; i--){
    console.log(star.slice(0,i))
}

