
menu.onclick = function myFunc() {
    var myMenu = document.getElementById('topnav');
    if( myMenu.className === "topnav responsive") {
        myMenu.className = "topnav";
    }else
    myMenu.className += " responsive";
}
var circle = document.getElementsByClassName("circle");
for(var i = 0;i<circle.length;i++)
{
    circle[i].onclick = function(){
        var book1 = document.getElementsByClassName("book1");
        var book2 = document.getElementsByClassName("book2");
        var book3 = document.getElementsByClassName("book3");
        var arr = [book1, book2, book3];
        for(var j = 0;j<circle.length;j++) {
            circle[j].classList.remove("active");
        }
        this.classList.add("active");
        var index = this.
        arr[i].classList.remove("none");
        // if (circle[i].classList.contains("active")) {
        //     console.log("good")
        //     for(var j = 0;j<circle.length-1;j++){
        //         circle[j].classList.remove("active");
        //     }
        //     circle[i].classList.add("active");
        // } else {console.log("error");

    }

}