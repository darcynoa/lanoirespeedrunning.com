var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "50px";
    } 
  });
}



function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
    document.getElementById("btnSidenav").style.zIndex = '0';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("btnSidenav").style.display = "block";
}