// let's Welcome the Players
console.log("Get Ready to Play!!");
 setTimeout(function(){console.log("gameStart!!!");},3000);



//make table
const container= document.querySelector("div");
for (let i = 1; i <= 9; i++){
  const div = document.createElement("div");
  div.className = "box";
  div.textContent = "";
  container.appendChild(div);

}


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
   
  playGame(){
    this.gameStart= true;
    let currentPlayer = person.playerOne;

    if (currentPlayer === "X"){
      console.log("it's your turn player X");
      div.addEventListener("click",play)
       this.switchPlayer;
    }
    else if(currentPlayer ==="O"){
      console.log("it's your turn player O")
      board.array=person.playerTwo;
      this.switchPlayer;
    } 
    return this.gameStart,currentPlayer;
 },

// functionality to end game.
  gameOver(){
  board.array !== "null"? "GAMEOVER": continueGame;
  console.log("GameOver");
 },
  switchPlayer(){
   currentPlayer === person.playerOne ? person.playerTwo:person.playerOne;
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


 