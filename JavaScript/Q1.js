var d = new Date();
//console.log(d);

//var day = d.getDay();

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

var hour = d.getHours();
var suffix = hour >= 12 ? "PM" : "AM";
hour = ((hour + 11) % 12) + 1 + suffix;

var minute = d.getMinutes();

var second = d.getSeconds();

console.log("Today is " + day);
console.log("Current Time is " + hour + " : " + minute + " : " + second);
