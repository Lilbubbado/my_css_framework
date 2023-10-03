/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myStickyFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav sticky") {
    x.className += " responsive";
  } else {
    x.className = "topnav sticky";
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}