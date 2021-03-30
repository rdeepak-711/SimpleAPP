var button = document.getElementById("topBtn");

window.onscroll = function() {scrollBtn()};

function scrollBtn() {
    if(document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function goTop() {
    document.documentElement.scrollTop = 0;
}