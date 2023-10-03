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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}