const playbtn = document.getElementById('play');
const highScore = document.getElementById('high-score');
const levels = document.getElementById('level');
const red=document.querySelector('.red');
const blue=document.querySelector('.blue');
const green=document.querySelector('.green');
const yellow=document.querySelector('.yellow');
const tile = document.querySelectorAll('.tile');
const board = document.querySelector('.board');

function blueSound(){
    let blue = new Audio('sounds/blue.mp3');
    blue.play();
}

function redSound(){    
    let red = new Audio('../sounds/red.mp3');
    red.play();
}

function greenSound(){        
    let green = new Audio('../sounds/green.mp3');
    green.play();
}   

function yellowSound(){            
    let yellow = new Audio('../sounds/yellow.mp3');
    yellow.play();
}   

function gameOverSound(){                
    let gameOver = new Audio('../sounds/game-over.mp3');
    gameOver.play();
}   

function wrongSound(){                    
    let wrong = new Audio('../sounds/wrong.mp3');
    wrong.play();
}

function gameWinSound(){                        
    let gameWin = new Audio('../sounds/game-win.mp3');
    gameWin.play();
}

const colors = ['red', 'blue', 'green', 'yellow'];

let pattern=[];
let score=0;
let level=1;


function patternGenerator(){
    if (level===1)
    {
        pattern.push(Math.floor(Math.random()*colors.length))
    }
    else if (level===2)
    {
        for (let i=0; i<2; i++){
        pattern.push(Math.floor(Math.random()*colors.length))
    }
    }
    else if (level===3)
    {
        for (let i=0; i<3; i++){
        pattern.push(Math.floor(Math.random()*colors.length))
    }
    }    
    else{
        for (let i=0; i<4; i++){
        pattern.push(Math.floor(Math.random()*colors.length))
    }
    }
    console.log(pattern);
    }
    

function gameBegin(){
    board.classList.remove('unclickable');
    patternGenerator();
    for (let i=0; i<pattern.length; i++){
        if (pattern[i]==0){
            red.classList.remove('inactive');
            redSound();
            red.classList.add('inactive');
        }
        else if (pattern[i]==1){
            blue.classList.remove('inactive');
            blueSound();
            blue.classList.add('inactive');
        }
        else if (pattern[i]==2){
            green.classList.remove('inactive');
            greenSound();
            green.classList.add('inactive');
        }
        else if (pattern[i]==3){
            yellow.classList.remove('inactive');
            yellowSound();
            yellow.classList.add('inactive');
        }
    }
}

function gamePlay(){
    gameBegin();  
    for (let i=0; i<tile.length; i++){
        tile[i].addEventListener('click', function(){
            if (tile[i].innerHTML==pattern[i]){
                score++;
                if (score==12){
                    level++;
                    levels.innerHTML=level;
                    gameWinSound();
                    score=0;
                    pattern=[];
                    gameBegin();
                }
            }
            else{
                gameOverSound();
                wrongSound();
                score=0;
                level=1;
                pattern=[];
                levels.innerHTML=level;
                highScore.innerHTML=score;
            }
        })
    }  

}

playbtn.addEventListener("click", function(){   
    gamePlay();
    highScore.innerHTML=score;

    if (score>highScore.innerHTML){
        highScore.innerHTML=score;
    }

});