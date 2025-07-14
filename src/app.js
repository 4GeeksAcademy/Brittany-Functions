// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

let who = ["I was","I was","I was","I was","I was", ];
let action = ["abducted","busy","trapped","abducted","lost"];
let what = ["trying to teach","by aliens","in a parallel universe where time moves differently","in my tv","in my yard", ];
let when = ["last week","last year","yesterday","in a time loop","day before yesterday",];

function randomfrom(array)
{
    return array[Math.floor(Math.random() * array.length)];
}


function genexcuse(){
    const excuse = `${randomfrom(who)} ${randomfrom(action)} ${randomfrom(what)} ${randomfrom(when)}`
    document.getElementById("excuse").textContent = excuse;
}

genexcuse()