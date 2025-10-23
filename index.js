// let's Welcome the Players
console.log("Get Ready to Play!!");
 setTimeout(function(){console.log("gameStart!!!");},3000);



//make table
const container= document.querySelector("div");
let tile = document.querySelector("div");

// creating DOM elements
const playBoard = document.createElement("div");
//playBoard.setAttribute(height:"20px",)

//Gameboard object
 const gameBoard ={
    boardArray :["null","null","null"
                ,"null","null","null"
                ,"null","null","null"]

 }
// Player object
 const person = {
    playerOne: "X",
    playerTwo: "O",
    playerOneName: playerOneName = alert("what is the player X name?"),
    playerTwoName: playerTwoName = alert("what is the player O name?"),
    playerOneScore: 0,
    playerTwoScore: 0
 }

 // Control flow object 
 const control = {
   gameStart:false,
   currentPlayer : "X" ,

  playGame(current){
    gameStart= true;
  if (current === "X"){
    console.log("where are you playing X");
    board.array=person.playerOne;
  }
   else if(current ==="O"){
   console.log("where are you playing O")
   board.array=person.playerTwo;
  } 
 },


// functionality to end game.
  gameOver(){
  board.array !== "null"? "GAMEOVER": continueGame;
  console.log("GameOver");
 },
  SwitchPlayer(){
   currentPlayer === X ? "O":"X";
   return currentPlayer
 },

 // functionality to manage game state and flow.
  continueGame(placeHolder){
    console.log(`it's ${placeHolder}'s turn to Play!`);
   playGame();
 }
}




 // creating eventlistners for DOM elements.
 function eventPropagation(){
 // add eventListeners for Players
 }