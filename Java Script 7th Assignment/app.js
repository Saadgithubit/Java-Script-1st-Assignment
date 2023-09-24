//......................................Q1......................................................

var firstName = prompt("Enter your first name?....")
var lastName = prompt("Enter your last name?....")

var fullName = firstName + " " + lastName

alert("Hiiii" + fullName)

//......................................Q2......................................................

var userInput = prompt("Enter your mobile phone")

var length = userInput.length

document.write("My Favourite Mobile phone is: " + userInput + "<br>" + "Length of string is: " + length)

//......................................Q3......................................................

var abc = "Pakistani"

var indexN = abc.indexOf("n")

document.write("String: " + abc + "<br>" + "Index of 'n' is: " + indexN)
//......................................Q4......................................................
var text = "Hello World"

document.write("String: " + text + "<br> Last index of 'l' is: " + text.lastIndexOf("l"))
//......................................Q5......................................................

var text = 'Pakistani'

document.write("String: " + text + " <br> Character at index '3' is: " + text[3])

//......................................Q6......................................................

var firstName = prompt("Enter your first name?....")
var lastName = prompt("Enter your last name?....")

var fullName = firstName + " " + lastName

alert("Hiiii" + fullName)

//......................................Q7......................................................

var city = "Hyderabad"

//Using slice method
// for (var i = 0; i < city.length; i++) {
//     var extract = city.slice(i , i + 5)
//     if (extract === "Hyder"){
//         city = city.slice(0 , i) + "Islam" + city.slice(i + 5)
//     }
//     alert(city)
// }
//Using replace method
city.replace("Hyder" , "Islam")

alert(city)
//......................................Q8......................................................


var beforeMessage = "Ali and Sami are best friends. They play cricket and football together."
var message = "Ali and Sami are best friends. They play cricket and football together."

for (i = 0; i < message.length; i++) {
    var extract = message.slice(i, i + 3)
    if(extract === "and"){
        message = message.slice(0,i) + "&" + message.slice(i + 3)
    }
}
document.write("Message: " + beforeMessage + "<br> After Replacement: " + message)

//......................................Q9......................................................

var value = "472"

document.write("Value: " + value + "<br> Type: String <br> Value: " + +value + "<br> Type: Number")
// ......................................Q10......................................................

var url = "www.facebook.com"

for (i = 0; i < url.length; i++) {

    var extract = url.slice(i, i + 4)
    if (extract === "www."){
        url = url.slice(0, i) + '' + url.slice(i + 4)
    }
}
document.write(url)

//......................................Q11......................................................

var userInput = prompt("Enter any text")
var upperCase = userInput.toUpperCase('')

console.log (upperCase)

//......................................Q12......................................................

var userInput = prompt("Enter any text")
var lowerCase = userInput.toLowerCase('')

console.log (lowerCase)

//......................................Q13......................................................

var userInput = prompt("Enter Any Lower Case Text")
var titleCase = userInput[0].toUpperCase() + userInput.slice(1)


document.write(titleCase)

//......................................Q14......................................................

var num = 35.36
var str = num.toString()

str = str.replace("." , "")

console.log(str)

//......................................Q15......................................................

var a = '3'
var b = '3'
var x = a + b
document.write("a is " + a + "<br> b is " + b + "<br> a + b = " + x)

//......................................Q16......................................................

var a = '3'
var b = '3'
var y = +a - +b
document.write("a is " + a + "<br> b is " + b + "<br> a - b = " + y)
//......................................Q17......................................................

var userName = prompt("Enter Your Name?....")

for (var i = 0; i < userName.length; i++){
    if (userName[i].charCodeAt() == 33){
    alert("Enter a valid name")
}
   else if (userName[i].charCodeAt() == 44){
    alert("Enter a valid name")

    } 
    else if (userName[i].charCodeAt() == 46){
    alert("Enter a valid name")

    } 
    else if (userName[i].charCodeAt() == 64){
    alert("Enter a valid name")

    } 
}

console.log(userName)    

//......................................Q18......................................................

var userInput = prompt("Enter cookie name?....")
var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
var cookieFound = false

for (i = 0; i < arr.length; i++){
     if(arr[i].toLowerCase() === userInput){
        cookieFound = true
        document.write(userInput + " is available at index " + i + " in our bakery")
     }
}
if(cookieFound == false){
    document.write("We are sorry. " + userInput + " is not available in our bakery")
}
//......................................Q19......................................................


var ab = 'car'
var cd = 'cab'
if( ab > cd){
    document.write("car is greater than cab")
}
else{
    document.write("cab is greater than car")
}
//......................................Q20......................................................

var password = prompt("Enter Password")
password = password.toLowerCase()
  
   if(password.length < 6){
        alert("Please insert alteast 6 chracter password")
        
    }
    else if(password[0] >= 0 || password[0] <= 9){
        alert("Password cannot begin with a number")
        
    }
else if(password.charCodeAt() <= 122 && password.charCodeAt() >= 97){
        alert("Login Successful")
        
    }
    


console.log(password.length)

//......................................Q21......................................................
//......................................Q22......................................................

var userInput = "Pakistan"

document.write("User Input: " + userInput + "<br> Last character of input is: " + userInput[7])
// ......................................Q23......................................................

var text = "The quick brown fox jumps over the lazy dog";
text = text.toLowerCase();
var count = 0;
for(var i =0; i < text.length; i++){
    var extract = text.slice(i , i + 3)
   if(extract === 'the'){
    ++count;
    continue
   }
}
console.log(text)
console.log("There are " + count + " occurrences of word the")

//......................................Q24......................................................       

var str = "Pakistan"

str = str.toLowerCase()

var vcount = 0
var ccount = 0
for (var i = 0; i < str.length; i++){

    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i'){
        vcount++
    }
    else if(str[i] >= 'a' && str[i] <= 'z'){
        ccount++;
    }
}

console.log("Number of vowels: " + vcount)
console.log("Number of consonants: " + ccount)