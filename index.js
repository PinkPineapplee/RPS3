const container= document.querySelector("div");
let gameStart= false;
 let currentPlayer = "X" ;

 const board ={
    array :["null","null","null","null","null","null","null","null","null"]

 }

 const person = {
   playerOne: "X",
    playerTwo: "O",
 }

 function playGame(current){
   gameStart= true;
  if (current === "X"){
   console.log("where are you playing X");
    board.array=person.playerOne;
  } else if(current ==="O"){
   console.log("where are you playing O")
 board.array=person.playerTwo;
  } 
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
    console.log(`it's ${placeHolder}'s turn to Play!`);
   playGame();
 }


 function eventPropagation(){
 // add eventListeners for Players
 }