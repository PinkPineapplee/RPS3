const container= document.querySelector("div");
 let currentPlayer = X ;

 const board ={
    array :["null","null","null","null","null","null","null","null","null"]

 }

 const person = {
   playerOne: X,
    playerTwo: O,
 }

 function gameStart(current){

 };
 function GameOver(){
  board.array ==! "null"? "GAMEOVER": continueGame;
  console.log("GameOver");
 };
 function SwitchPlayer(){
  
   currentPlayer === X ? "O":"X";
   return currentPlayer
 };

 function continueGame(placeHolder){

 }