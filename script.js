let pbottom = document.querySelector("#pbtm")
let elem = document.querySelectorAll(".elem")
let box = document.querySelectorAll(".box")
let counter  = 60;
let score = 0;
let hitrn;
let timer;
var rn;

function IncreaseScore (){
    score +=10
    box[2].textContent = score
}

console.log(box[0].textContent)

function  getNewHit(){
     hitrn = Math.floor(Math.random()*10)
      box[0].textContent = hitrn
}

function makebubble(){
    for(var i =1; i<153; i+=1){ 
          rn = Math.floor(Math.random()*10)
        pbottom.innerHTML += `<div class="bubble">${rn}</div>`
    }
}

function runTimer(){
         timer = setInterval(function(){
            if(counter > 0){
                counter --
                box[1].textContent = counter
            }else{
                clearInterval(timer)
                pbottom.innerHTML = ` <h1 class="over">Game is over. SCORE ${score}</h1>`
            }     
        }, 1000)
}

makebubble()
runTimer()
getNewHit()

pbottom.addEventListener("click", function(details){
    let clickedNum = Number(details.target.textContent)
    if(clickedNum === hitrn){
        IncreaseScore();
        makebubble()
        getNewHit();
    }
 })


