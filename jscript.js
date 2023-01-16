let head = document.querySelector('header')
let button = document.querySelector('.blackButton')

window.onscroll = scrollChange
function scrollChange (){
    if (window.pageYOffset > 560) {
        head.style.backgroundColor = 'white'; button.style.backgroundColor = 'green';}
    else {head.style.backgroundColor = "";button.style.backgroundColor = "";}
};

let m = document.querySelectorAll('g[stroke-linecap="butt"]')
m.forEach(element => element.style.transition = '0.5s linear');
var intervalId = window.setInterval(function(){
        var randNum =  (Math.floor(Math.random() * m.length) +3) *2;
        if (m[randNum] !== undefined){
        m[randNum].style.opacity = '0';}
}, 10);
var intervalId = window.setInterval(function(){
        var randNum =  (Math.floor(Math.random() * m.length) +3) *2;
        if (m[randNum] !== undefined){
        m[randNum].style.opacity = '1';}
}, 10);