//function openPage( pageName, elmnt, color) {
//
//    var i, tabcontent, tablinks;
//
//    tabcontent = document.getElementsByClassName("tabcontent");
//    for (i = 0; i < tabcontent.length; i++) {
//        tabcontent[i].style.display = "none";
//    }
//
//    tablinks = document.getElementsByClassName("tablink");
//    for (i = 0; i < tablinks.length; i++) {
//        tablinks[i].style.backgroundColor = "";
//        tablinks[i].style.color = "";
//    }
//
//
//    document.getElementById(pageName).style.display = "block";
//
//    elmnt.style.backgroundColor = color;
//    elmnt.style.color = '#ffbf00';
//
//}
//
//document.getElementById("defaultOpen").click();

document.querySelector('.category-img').addEventListener("click", function()
{
    document.querySelector('.category-img').style.transform = "rotateY(90deg)";
    console.log("Rotated")
    document.querySelector('#test1').style.transform = "rotateY(180deg)";
});
