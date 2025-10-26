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
    playerOneScore: 0,
    playerTwoScore: 0
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

 // creating eventlistners for DOM elements.
 function eventPropagation(){
 // add eventListeners for Players
 }


 