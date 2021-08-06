
// modal

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];
var tooltip = document.querySelector('.tooltip')
var tooltiptext = document.querySelector('.tooltiptext');
var navbar = document.querySelector('.navbar');

 
//click on icon to show modal
btn.onclick = function() {
  modal.style.display = "block";
  tooltiptext.style.display= 'none';
}

//'x' click
span.onclick = function() {
  modal.style.display = "none";
  tooltiptext.style.display= 'block';

}

//onWindow click
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    tooltiptext.style.display= 'block';

  }
}



//timers
var twoMin = document.querySelector('.min-2')
var fiveMin = document.querySelector('.min-5')
var tenMin = document.querySelector('.min-10')
var audio = document.querySelector('.audio');
let timer;
var x;

function fns(t){
  largeCircle.style.animation="";
    clearInterval(x)
    startTimer(t)
    largeCircle.style.animation="";
    rules.style.display='none';
}

twoMin.addEventListener('click', function(e){
   fns(120)
})
fiveMin.addEventListener('click', function(e){
   fns(300) 
})
tenMin.addEventListener('click', function(e){
    fns(600)
})

let h1 = document.createElement('h1');
h1.className='runningTimer';
navbar.insertBefore(h1,navbar.childNodes[3]);

var rules = document.querySelector('.rules');
var largeCircle = document.querySelector('.large');


function startTimer(time){
    modal.style.display = "none";
    
    x =  setInterval(function(){

        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String((time) % 60).padStart(2, 0);

        h1.textContent = `${min}:${sec}`;
        rules.style.display='block';
        largeCircle.style.animation="ripple 12s infinite";

        if (time === 0) {
        audio.play();
        largeCircle.style.animation="";
        rules.style.display='none';
        tooltiptext.style.display= 'block';
        clearInterval(x);
        }

        //decrease timer by 1s for every sec
        time--;

    },1000)

    tooltiptext.style.display= 'none';
}



