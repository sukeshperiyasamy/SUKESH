var myDate = new Date();
var  hrs = myDate.getHours();
var msg = "";

if (hrs<12) msg = "Good Morning!";      // After 6am
if (hrs >= 12 && hrs<17) msg = "Good Afternoon!";    // After 12pm
if (hrs >= 17 && hrs<=24) msg = "Good Evening!";      // After 5pm

document.write(msg);
