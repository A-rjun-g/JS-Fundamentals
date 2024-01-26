let orginalBoard;
let player1='O';
let player2='X';
let currentPlayer=player1;
/*ALl Possible winning combiantion */
const winningCombination=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

/* Cell holds the reference for all the element which have been selected by queryselectorall. The queryselectorall selects the all the element with the id cell  */

const cells =  document.querySelectorAll(".cell");
startGame();

function startGame(){
    /*If the user clicks the replay button. The startGame function will run which will replay the board   */
    document.querySelector(".endgame").style.display="none";

    /* Initialising the Board */ 
     orginalBoard=Array.from(Array(9).keys());

     /*Resetting the Board Value */
     for(let i=0;i<cells.length;i++)
     {
        cells[i].innerText='';

        /*Removing the Background color */
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click',turnClick,false)
     }
     currentPlayer=player1;

}

function turnClick(square){
        if(typeof orginalBoard[square.target.id]=='number'){
            turn(square.target.id,currentPlayer);
            if(!checktie()){
                if(currentPlayer===player1) currentPlayer=player2;
                else currentPlayer=player1;
            }
        }
}   

function turn(squareId,player){
    orginalBoard[squareId]=player;
    document.getElementById(squareId).innerText=player;
    let gameWon=checkWin(orginalBoard,player);
    if(gameWon) gameOver(gameWon);
}

function checkWin(board,player){
    /*a-> empty array index of the element get added to that array if the player representation and the box values are same */

    let plays=board.reduce((a,e,i)=>
    (e===player)?a.concat(i):a,[]);
    let gameWon=null;

    for(let [index,win] of winningCombination.entries()){
        if(win.every(elem => plays.indexOf(elem) > -1)){
            gameWon={index:index,player:player};
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon){
    /*Highlight All the square of Winnin Combination */
    for(let index of winningCombination[gameWon.index]){
        document.getElementById(index).style.backgroundColor=gameWon.player==player1?"blue":"red";
    }

    for(let i=0;i<cells.length;i++){
        cells[i].removeEventListener('click',turnClick,false);
    }
    declareWinner(gameWon.player+'Win');
}

function emptySquare(){
    return orginalBoard.filter(s=>typeof s=="number");
}

function declareWinner(who){
    document.querySelector(".endgame").style.display="block";
    document.querySelector(".endgame .text").innerText=who;
}

function checktie(){
    if(emptySquare().length==0){
        for(let i=0;i<cells.length;i++){  
            cells[i].removeEventListener('click',turnClick,false);
        }
        declareWinner('Tie');
        return true;
    }
    return false;
}
