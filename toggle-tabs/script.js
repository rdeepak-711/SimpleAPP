function openCity(event, cityName) {
    var i, tabContent, tablinks;

    tabContent = document.getElementsByClassName("tabContent");
    for(i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }

    document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += "active";
}