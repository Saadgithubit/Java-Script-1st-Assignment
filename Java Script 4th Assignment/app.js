//............................................Q1......................................................

var studentName = []

//............................................Q2......................................................


var studentName = []

//............................................Q3......................................................

var name = [Saad , Ahmed , Sohail , Ahmed]

//............................................Q4......................................................

var num = [1 , 2 , 3 , 4 , 5]

//............................................Q5......................................................

var boolean = [true , false]

//............................................Q6......................................................

var mixArray = [Saad , Ahmed , 1 , 2 , 3, true , false]

//............................................Q7......................................................

var qualfication = ['SSC', 'HSC', 'BCS','BS', 'BCOM', 'MS', 'M. Phil', 'PhD']

document.write("<h1>Qualifcation</h1>")
document.write("1) " + qualfication[0] + "<br>")
document.write("2) " + qualfication[1] + "<br>")
document.write("3) " + qualfication[2] + "<br>")
document.write("4) " + qualfication[3] + "<br>")
document.write("5) " + qualfication[4] + "<br>")
document.write("6) " + qualfication[5] + "<br>")
document.write("7) " + qualfication[6] + "<br>")
document.write("8) " + qualfication[7] + "<br>")


//............................................Q8......................................................

var studentName = ["Saad" , "Hammad" , "Talha"]
var score = [380 , 470 , 230]


document.write("Score of " + studentName[0] + " is " + score[0] + ". Percentage: " + score[0]/500 *100 + "% <br>")
document.write("Score of " + studentName[1] + " is " + score[1] + ". Percentage: " + score[1]/500 *100 + "% <br>")
document.write("Score of " + studentName[2] + " is " + score[2] + ". Percentage: " + score[2]/500 *100 + "% <br>")

//............................................Q9......................................................

var colors = ["Red" , "Blue" , "Yellow" , "Black"]
document.write(colors + "<br>")

colors.unshift(prompt("Add color what color you want to beginning of an array"))
document.write(colors + "<br>")

colors.push(prompt("Add color what color you want to end of an array"))
document.write(colors + "<br>")

colors.unshift("Green" , "White")
document.write(colors + "<br>")

colors.shift()
document.write(colors + "<br>")

colors.pop()
document.write(colors + "<br>")

colors.splice(prompt("Which index you want to add color..") , 0 , prompt("color name"))
document.write(colors + "<br>")

var userDefined = colors.splice(prompt("Which index you want to delete colors") , prompt("How many colors you want to delete"))
document.write(colors)

colors.splice(userDefined , userDefined)
document.write(colors)
//............................................Q10......................................................

var studentScore = [320, 480, 230, 120]

document.write('Score of Students ' + studentScore + "<br>")
document.write('Order Score of Students ' , studentScore[3], ' ', studentScore[2], ' ', studentScore[0], ' ', studentScore[1])

//............................................Q11......................................................

var cities = ["Karachi","Lahore","Peshawar","Quetta","Islamabad"]
document.write("<h1>Cities list:</h1> <br>")
document.write(cities)
document.write("<h1>Selected cities list:</h1> <br>")
document.write(cities[4],cities[3])


//............................................Q12......................................................

var arr = ["This","is","my","cat"]
document.write("<h1>Array:</h1><br>" + arr)
document.write("<h1>String:</h1><br>" + arr[0] + " " + arr[1] + " " + arr[2] + " " +arr[3])

//............................................Q13......................................................

var devices = ['keyboard','mouse','printer','monitor']
var out = "Out: <br>"

document.write("Devices: " , devices )
document.write("<br><br>")
document.write(out,devices[0])
document.write("<br><br>")
document.write(out,devices[1])
document.write("<br><br>")
document.write(out,devices[2])
document.write("<br><br>")
document.write(out,devices[3])
//............................................Q14......................................................

var devices = ['keyboard','mouse','printer','monitor']
var out = "Out: <br>"

document.write("Devices: " , devices )
document.write("<br><br>")
document.write(out,devices[3])
document.write("<br><br>")
document.write(out,devices[2])
document.write("<br><br>")
document.write(out,devices[1])
document.write("<br><br>")
document.write(out,devices[0])






