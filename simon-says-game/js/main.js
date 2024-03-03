const playbtn = document.getElementById('play');
const highScore = document.getElementById('high-score');
const levels = document.getElementById('level');
const red=document.querySelector('.red');
const blue=document.querySelector('.blue');
const green=document.querySelector('.green');
const yellow=document.querySelector('.yellow');
const tile = document.querySelectorAll('.tile');
const board = document.querySelector('.board');

red.id=0;
blue.id=1;
green.id=2;
yellow.id=3;


function blueSound(){
    let blue = new Audio('sounds/blue.mp3');
    blue.play();
}

function redSound(){    
    let red = new Audio('sounds/red.mp3');
    red.play();
}

function greenSound(){        
    let green = new Audio('sounds/green.mp3');
    green.play();
}   

function yellowSound(){            
    let yellow = new Audio('sounds/yellow.mp3');
    yellow.play();
}   

function gameOverSound(){                
    let gameOver = new Audio('sounds/game-over.wav');
    gameOver.play();
}   

function wrongSound(){                    
    let wrong = new Audio('sounds/wrong.mp3');
    wrong.play();
}

function gameWinSound(){                        
    let gameWin = new Audio('sounds/game-win.wav');
    gameWin.play();
}

const colors = ['red', 'blue', 'green', 'yellow'];

let pattern=0;
let score=0;
let level=1;


function patternGenerator(){
        pattern = Math.floor(Math.random()*colors.length);
    
}

function gameBegin(){
    pattern=0;
    board.classList.remove('unclickable');
    patternGenerator();
        if (pattern==0){
            red.classList.remove('inactive');
            redSound();
            setTimeout(function(){
            red.classList.add('inactive');},1000)
        }
        else if (pattern==1){
            blue.classList.remove('inactive');
            blueSound();
            setTimeout(function(){
            blue.classList.add('inactive');},1000)
        }
        else if (pattern==2){
            green.classList.remove('inactive');
            greenSound();
            setTimeout(function(){
            green.classList.add('inactive');},1000)
        }
        else if (pattern==3){
            yellow.classList.remove('inactive');
            yellowSound();
            setTimeout(function(){
            yellow.classList.add('inactive');},1000)
        }
    }


function gamePlay(){
    pattern=0; 
    gameBegin(); 
    tile.forEach(function(tile){
        tile.addEventListener('click', function(){
            if (tile.id == pattern){
                score++;
                highScore.innerHTML=score;
                setTimeout(() => {
                gameBegin();    
                },300);
                
                if (score==12)
                {
                    score=0;
                    level++;
                    levels.innerHTML=level;
                    gameWinSound();
                    highScore.innerHTML=score;
                }
                }
            else{
                wrongSound();
                setTimeout(() => {
                gameOverSound();
                },500);
                score=0;
                level=1;
                pattern=0;
                levels.innerHTML=level;
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        })
    })  

}

playbtn.addEventListener("click", function(){   
    playbtn.classList.add('unclickable');
    gamePlay();
});