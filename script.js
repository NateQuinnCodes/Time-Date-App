
//get month & month name
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const a = new Date();
let month = months[a.getMonth()];
console.log(month)

//get day of month
let b = new Date();
let day = b.getDate();
console.log(b)

//get year
let c = new Date();
let year = c.getFullYear();
console.log(c)

//output
//document.getElementById('dateOut').innerHTML = month + "/" + b + "/" + c
//document.getElementById('dateOut').innerHTML = 'Hey Bud'
let results = month + "/" + day + "/" + year
console.log(results)
document.getElementById("date").innerHTML = results

