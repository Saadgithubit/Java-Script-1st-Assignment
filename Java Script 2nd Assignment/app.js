//...................Q1.....................................


var num1 = prompt('Enter Your Number')
var num2 = prompt('Enter Your Second Number')
var result = +num1 + +num2
alert ('Sum of ' + num1 +' '+ 'and ' + num2 + ' is ' + result)


//....................Q2.....................................



var num1 = prompt('Enter Your Number')
var num2 = prompt('Enter Your Second Number')
var result = +num1 - +num2
alert ('Result of subtracting ' + num1 +' '+ 'from ' + num2 + ' is ' + result)


var num1 = prompt('Enter Your Number')
var num2 = prompt('Enter Your Second Number')
var result = +num1 * +num2
alert ('Result of multplying ' + num1 +' '+ 'from ' + num2 + ' is ' + result)

var num1 = prompt('Enter Your Number')
var num2 = prompt('Enter Your Second Number')
var result = +num1 / +num2
alert ('Result of dividing ' + num1 +' '+ 'from ' + num2 + ' is ' + result)

//..........................Q3.............................................



var a;

document.write(a + "<br>")

a = 3

document.write("Initial Value is " + a++ + "<br>")

document.write("Value after increment is " + a + "<br>")

var b = a + 7

document.write("Value after addition is " + b-- + "<br>")

document.write("Value after decrement is " + b + "<br>")

var c = b / 10

document.write("The Reminder is " + c)

//.................................Q4..................................................................

var ticketCost = 1500

var result = ticketCost * 5

document.write("Total cost to buy 5 tickets to a movie is " + result + " PKR")


//..................................Q6................................................

var cal = 27
document.write(cal + " oC is " + (cal * 9/5) + 32 + " oF"+ "<br>")

var fah = 80.6

document.write(fah + " oF is " +(fah - 32) * 5/9 + " oC")



//..................................Q7...................................................

var item1 = 560
var itemQuantity = 2
var item2 = 200
var itemQuantity2 = 5
var shippingCharges = 150
var total = item1 * itemQuantity + item2 * itemQuantity2 + shippingCharges

document.write("<h1>Shopping Cart</h1>" + "<br>")

 
document.write("Price of item 1 is " + item1 + "<br>")
document.write("Quantity of item 1 is " + itemQuantity + "<br>")
document.write("Price of item 2 is " + item2 + "<br>")
document.write("Quantity of item 2 is " + itemQuantity2 + "<br><br>")

document.write("Shipping Charges " + shippingCharges + "<br><br>")

document.write("Total cost of your is " + total + " PKR")


//....................................Q8.................................................

var totalMarks = 1200
var marksObtained = 900
var percentage = marksObtained * 100 / totalMarks

document.write("<h1>Marks Sheet</h1>" + "<br>")

document.write("Total Marks : " + totalMarks + "<br>")
document.write("Marks Obtained : " + marksObtained + "<br>")
document.write("Percentage : " + percentage + "%" )


//.......................................Q9..............................................

var usDollar = 10
var saudiRiyal = 25

var total = usDollar * 104 + saudiRiyal * 28

document.write("<h1>Currency In PKR</h1>" + "<br>")
document.write("Total currency in PKR : " + total )

//.......................................Q10..........................................................

var calculation = (5 * 10) / 2
document.write(calculation)

//........................................Q11...........................................................

var currentYear = 2023
var birthYear = 1998

var age = currentYear - birthYear

document.write("<h1>The Age Calculator</h1>" + "<br>")

document.write("Current Year : " + currentYear + "<br>")
document.write("Birth Year : " + birthYear + "<br><br>")

document.write("They are either 24 or " + age + " Years old")


//........................................Q12...........................................................

var a = 10

document.write("Result :" + "<br>" + "The Value of a is: "+ a + "<br>" + ".................................." + "<br>")
document.write("The Value of ++a is: " + ++a + "<br>" + "Now The Value of a is: " + a + "<br><br>")
document.write("The Value of a++ is: " + a++ + "<br>" + "Now The Value of a is: " + a + "<br><br>")
document.write("The Value of --a is: " + --a + "<br>" + "Now The Value of a is: " + a + "<br><br>")
document.write("The Value of a-- is: " + a-- + "<br>" + "Now The Value of a is: " + a + "<br><br>")


//........................................Q13...........................................................



var favSnack = "Oreo Biscuit"

document.write("Favourite Snack " + favSnack + "<br>")

var currentAge = 25
document.write("Current Age " + currentAge  + "<br>") 

var estimatedMaxAge = 70
document.write("EStimated Maximum Age " + estimatedMaxAge  + "<br>")

var perDay = 2

document.write("Amount per day " + perDay  + "<br>")
 var result = perDay * 365 * (estimatedMaxAge - currentAge)

 document.write("You will need " + result + " " + favSnack + " to last you until the ripe old age of " + estimatedMaxAge)
















