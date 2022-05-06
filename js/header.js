var header = document.querySelector("header");
var logo = document.getElementById("logo");
var headerDiv = document.getElementById("index");

var onScrollHandler = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop >= 10) {
        header.classList.add("header-scroll");
        logo.classList.add("logo-scroll");
        headerDiv.classList.add("headerDiv-scroll");
    }else{
        header.classList.remove("header-scroll");
        logo.classList.remove("logo-scroll");
        headerDiv.classList.remove("headerDiv-scroll");
    }
};

document.addEventListener ("scroll", onScrollHandler);

var home = document.getElementById("home");
home.addEventListener("click", function(){
    window.scrollTo(0, 0);
});