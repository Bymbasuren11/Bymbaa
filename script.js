var fullImg = document.querySelector(".full-img");
var miniImg = document.querySelectorAll(".mini-img");

function changeImg(x) {

    var targetImg = miniImg[x - 1];
    var imgAttr = targetImg.getAttribute("src");

    fullImg.setAttribute("src", imgAttr);

}

var fullImg2 = document.querySelector(".full-img2");
var miniImg2 = document.querySelectorAll(".mini-img2");

function changeImg2(x) {

    var targetImg = miniImg2[x - 1];
    var imgAttr2 = targetImg.getAttribute("src");

    fullImg2.setAttribute("src", imgAttr2);

}