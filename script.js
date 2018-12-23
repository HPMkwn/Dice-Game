var scores,roundScore,activePlayer,gamePlaying;


newgame();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){

    //1. random number
    var dice = Math.ceil(Math.random()*6);
    
    //2. disply the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src='dice-' + dice + '.png';
    
    //3. Update the round score if the rolle number was not a a;
    if(dice !==1){
        //add sore
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
    }else{
        
    scores[activePlayer]+=roundScore;
    //update the ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        if(scores[activePlayer]>=30){
            document.querySelector('#name-' + activePlayer).textContent= "winner";
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying=false;
        }
        else{
        //next player
        nextPlayer();
        }

        
    }
    
}});


document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
    //add current score to globasl score
    scores[activePlayer]+=roundScore;
    //update the ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check if player won the game
    
           if(scores[activePlayer]>=30){
            document.querySelector('#name-' + activePlayer).textContent= "winner";
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying=false;
        }
        else{
        //next player
        nextPlayer();
        }
        
    
}});


function nextPlayer(){
            activePlayer === 0 ? activePlayer =1 : activePlayer=0;
        roundScore= 0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
    
        /*document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');*/
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display ='none';
        
}


document.querySelector('.btn-new').addEventListener('click',newgame);                                                    

                                                    
function newgame(){
    scores = [0,0];
    roundScore =0;
    activePlayer =0;
    gamePlaying=true;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent= "player-1";
    document.getElementById('name-1').textContent= "player-2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');    
}
