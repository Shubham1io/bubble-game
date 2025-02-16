var count = 60;
var score = 0;
var hitVal;
var hitTime;

// creating bubble

function bubble(){
    barrel = "";
for(var i=1; i<=168; i++){
    var v = Math.floor(Math.random()*10);
    barrel += `<div class="bubble">${v}</div>`;
}
document.querySelector("#pnbtm").innerHTML = barrel;
}
bubble();

//setting random value in hit 

function setHit(){
    hitVal = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitVal;
    hitTime = Date.now(); // get current time when hitVal is set

}
setHit();

// fixing timer value and ending session

function setTimer(){
    var timerVal= setInterval(function(){
        if(count > 0){
            count--;
            document.querySelector("#timeval").textContent = count;
        }else{
            clearInterval(timerVal);
            document.querySelector("#pnbtm").innerHTML = "<h1> Game Over </h1>";
            document.querySelector("#hit").textContent = "0";

        }
        
    },1000)
}
setTimer();

// fixing score card

function setScore(){
    score+=10;
    document.querySelector("#stscore").textContent = score;
}

// getting clicked number and checking time limit

document.querySelector("#pnbtm").addEventListener("click",function(details){
    var getClicked = Number(details.target.textContent);
    var currentTime =  Date.now(); // get current time on click
    if (getClicked === hitVal){
        
        var timeTaken = (currentTime - hitTime)/1000;
        if (timeTaken <=4){
            setScore();
        }
        bubble();
        setHit();
    }
});


