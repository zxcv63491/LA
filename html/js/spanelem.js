var modalElem = document.getElementById("tyModal");
var spanElem = document.getElementsByClassName("tyClose")[0];

spanElem.onclick = function () {
    modalElem.style.display = "none";
}

setTimeout(function () {
    modalElem.style.display = "block";
}, 1000);