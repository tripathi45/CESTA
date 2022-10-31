var navlinks = document.getElementById("navlinks");

    function showmenu(){
        navlinks.style.right = "0px";
    }

    function hidemenu(){
    navlinks.style.right = "-200px";
}

var content1 = document.getElementById("content1");

var content2 = document.getElementById("content2");

var btn1 = document.getElementById("btn1");

var btn2 = document.getElementById("btn2");

function OpenUpcEvent(){
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    btn1.style.color ="#6936f4";
    btn2.style.color = "#000";
    content1.style.transitionDelay = "0.3s";
    content2.style.transitionDelay = "0s";
}
function OpenResults(){
    content1.style.transform = "translateX(-100%)" ;
    content2.style.transform = "translatex(0)";
    btn2.style.color ="#6936f4";
    btn1.style.color = "#000";
    content2.style.transitionDelay = "0.3s";
    content1.style.transitionDelay = "0s";
}
let coutDownDate = new Date("Nov 1,2022 00:00:00").getTime();

var x = setInterval(function()  {
    var now = new Date().getTime();
    var distance = coutDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);