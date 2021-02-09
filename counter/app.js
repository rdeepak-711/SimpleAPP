let plus = document.getElementById("plus");
let number = document.getElementById("number");
let minus = document.getElementById("minus");

let count=0;

plus.onclick = function() {
    count+=1;
    number.innerHTML = count;
    if(count > 0){
        number.className = "btn btn-success btn-lg";
    }
    else if (count < 0){
        number.className = "btn btn-danger btn-lg";
    }
    else {
        number.className = "btn btn-outline-dark btn-lg";
    }

}

minus.onclick = function() {
    count-=1;
    number.innerHTML = count;
    if(count > 0){
        number.className = "btn btn-success btn-lg";
    }
    else if (count < 0){
        number.className = "btn btn-danger btn-lg";
    }
    else {
        number.className = "btn btn-outline-dark btn-lg";
    }

}