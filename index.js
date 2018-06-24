document.onload = function () {
    var success = document.getElementById("success");
    success.classList.toggle("none");
    document.getElementById('mail').className="";
    document.getElementById('number').className="";
}

menu.onclick = function(){
    event.preventDefault();
    var myMenu = document.getElementById('topnav');
    if( myMenu.className === "topnav responsive") {
        myMenu.className = "topnav";
    }else
    myMenu.className += " responsive";
}

document.getElementById("submitbut").onclick = function(){
    event.preventDefault();
    function ValidName() {
        var re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        var myName = document.getElementById('firstname').value;
        var valid = re.test(myName);
        if (valid){
            return true;
        }
        else{
            document.getElementById('firstname').classList.add("wrong");
            document.getElementById("errortext1").classList.remove("none");
            return false;
        }
    }
    function ValidPhone() {
        var re = /^\d[\d\(\)\ -]{4,14}\d$/;
        var myPhone = document.getElementById('number').value;
        var valid = re.test(myPhone);
        if (valid){
            return true;
        }
        else{
            document.getElementById('number').classList.add("wrong");
            document.getElementById("errortext2").classList.remove("none");
            return false;
        }
    }
    var x = ValidPhone();
    var y = ValidName();
    if(x==1 && y==1) {
        success.classList.remove("none");
    }
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
        // arr[i].classList.remove("none");
        // if (circle[i].classList.contains("active")) {
        //     console.log("good")
        //     for(var j = 0;j<circle.length-1;j++){
        //         circle[j].classList.remove("active");
        //     }
        //     circle[i].classList.add("active");
        // } else {console.log("error");

    }

}

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementsByClassName("rtext");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        captionText[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText[slideIndex-1].style.display = "block";
}