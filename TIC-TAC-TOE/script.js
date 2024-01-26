let orginalBoard;
let humanPlayer='O';
let aiPlayer='X';

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

}

function turnClick(square){
        turn(square.target.id,humanPlayer);
}   

function turn(squareId,player){
    orginalBoard[squareId]=player;
    document.getElementById(squareId).innerText=player;
}