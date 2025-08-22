// let's Welcome the Players
console.log("Get Ready to Play!!");
 setTimeout(function(){console.log("gameStart!!!");},3000);




const container= document.querySelector("div");

let gameStart= false;
let currentPlayer = "X" ;
// creating DOM elements
const playBoard = document.createElement("div");
//playBoard.setAttribute(height:"20px",)
 const board ={
    array :["null","null","null"
           ,"null","null","null"
           ,"null","null","null"]

 }

 const person = {
    playerOne: "X",
    playerTwo: "O",
 }

 // functionality to playgame
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

// functionality to end game.
 function GameOver(){
  board.array ==! "null"? "GAMEOVER": continueGame;
  console.log("GameOver");
 };
 function SwitchPlayer(){
   
   currentPlayer === X ? "O":"X";
   return currentPlayer
 };

 // functionality to manage game state and flow.
 function continueGame(placeHolder){
    console.log(`it's ${placeHolder}'s turn to Play!`);
   playGame();
 }

 // creating eventlistners for DOM elements.
 function eventPropagation(){
 // add eventListeners for Players
 }