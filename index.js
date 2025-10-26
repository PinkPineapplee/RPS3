// let's Welcome the Players
console.log("Get Ready to Play!!");
 setTimeout(function(){console.log("gameStart!!!");},3000);



//make table
const container= document.querySelector(".container");
for (let i = 1; i <= 9; i++){
  const div = document.createElement("div");
  div.className = "box";
  div.textContent = "";
  container.appendChild(div);

}


//Gameboard object
 const gameBoard ={
    boardArray :[null,null,null
                ,null,null,null
                ,null,null,null]

 }
// Player object
 const person = {
    playerOne: "X",
    playerTwo: "O",
    playerOneName: playerOneName = alert("what is the player X name?"),
    playerTwoName: playerTwoName = alert("what is the player O name?"),
    
 }

 // Control flow object 
 const control = {
    gameStart:false,
   currentPlayer: null,

      playGame(){
        this.gameStart= true;
        this.currentPlayer = person.playerOne;

       const boxes = document.querySelectorAll(".box");

       boxes.forEach((box, index) => {
         box.addEventListener("click", () => this.play(index, box));
       });
       console.log(`It's ${this.currentPlayer}'s turn`);
    },

      //Play action 
      play(index, box){
        if (gameBoard.boardArray[index] === null ){
          //replaces null with player mark
          gameBoard.boardArray[index] = this.currentPlayer;
          box.textContent = this.currentPlayer;

          //switch player
          this.currentPlayer =
          this.currentPlayer === person.playerOne ? person.playerTwo : person.playerOne;
          console.log(gameBoard.boardArray);
        }
       else{
          alert("Oops! that spot is already taken!");
          console.log("That spot is already taken!");
       } 
      },
       
      // functionality to manage game state and flow.
        continueGame(placeHolder){
          console.log(`it's ${placeHolder}'s turn to Play!`);
          playGame();
      },

      // functionality to end game.
        gameOver(){
         gameBoard.boardArray!== null ? "GAMEOVER": continueGame;
         console.log("GameOver");
      }

}

// digital representation of a physical score board.
 const scoreBoard = {
    playerOneScore: [playerOneName, 0],
    playerTwoScore: [playerTwoName, 0]
 };

 function updateScoreBoard(){
  scoreCondition();
   if(gameStart === true && playerOneWins === true){
        playerOneScore[1] += 1;
        alert(`${playerOneScore[0]} has scored 1 point`);
        console.log(`${playerOneScore[0]} has scored 1 point`);
   } 
   else if (gameStart === true && playerTwoWins === true){
        playerTwoScore[1] += 1;
        alert(`${playerTwoScore[0]} has scored 1 point`);
        console.log(`${playerTwoScore[0]} has scored 1 point`);
  };
 }
  function scoreCondition(){
     let playerOneWins = false;
     let playerTwoWins = false;

     if ( gameBoard.boardArray[0,1,2]=== "X" || //horizontal axis
          gameBoard.boardArray[3,4,5]=== "X" ||
          gameBoard.boardArray[6,7,8]=== "X" ||
          gameBoard.boardArray[0,3,6]=== "X" || //vertical axis
          gameBoard.boardArray[1,4,7]=== "X" ||
          gameBoard.boardArray[2,5,8]=== "X" || //diagonal axis
          gameBoard.boardArray[0,4,8]=== "X" ||
          gameBoard.boardArray[6,4,2]=== "X" 
      ){
         playerOneWins = true;
      }
     else if( gameBoard.boardArray[0,1,2]=== "O" || //horizontal axis
              gameBoard.boardArray[3,4,5]=== "O" ||
              gameBoard.boardArray[6,7,8]=== "O" ||
              gameBoard.boardArray[0,3,6]=== "O" || //vertical axi
              gameBoard.boardArray[1,4,7]=== "O" ||
              gameBoard.boardArray[2,5,8]=== "O" || //diagonal axis
              gameBoard.boardArray[0,4,8]=== "O" ||
              gameBoard.boardArray[6,4,2]=== "O" 
            ) {
              playerTwoWins = true;
            }
    return playerOneWins, playerTwoWins;
  };