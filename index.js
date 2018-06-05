
menu.onclick = function myFunc() {
    var myMenu = document.getElementById('topnav');
    if( myMenu.className === "topnav responsive") {
        myMenu.className = "topnav";
    }else
    myMenu.className += " responsive";
}