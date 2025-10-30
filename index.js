// let's Welcome the Players
console.log("Are you Ready to Play!!");
 setTimeout(function(){console.log("Have Fun!!!");},3000);

 //make table
const container= document.querySelector(".container");
for (let i = 1; i <= 9; i++){
  const div = document.createElement("div");
  div.className = "box";
  container.appendChild(div);

}


let is_winner= false;


//Gameboard object
 const gameBoard ={
    boardArray :[null,null,null
                ,null,null,null
                ,null,null,null]

 };
// Player object
 const person = {
    playerOne: "X",
    playerTwo: "O",
    playerOneName: playerOneName = prompt("Please player X enter your name?") || "Player X",
    playerTwoName: playerTwoName = prompt("Please player O enter your name?") || "Player O"
  
 };

person.playerOne.className = "x";
person.playerTwo.className = "o";
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
       this.continueGame();
       reset();
    },

      //Play action 
      play(index, div){
        if (gameBoard.boardArray[index] === null ){
          //replaces null with player mark
          gameBoard.boardArray[index] = this.currentPlayer;
          div.textContent = this.currentPlayer;

          //switch player
          this.currentPlayer =
          this.currentPlayer === person.playerOne ? person.playerTwo : person.playerOne;
          updateScoreBoard();
          console.log(gameBoard.boardArray);
          this.gameOver()
        }
       else{
        
          alert("Oops! that spot is already taken!");
          console.log("That spot is already taken!");
       } 
      },
       
      // functionality to manage game state and flow.
        continueGame(){
          if(is_winner === true){
            gameBoard.boardArray = [null,null,null,
                                    null,null,null,
                                   null,null,null];
          } else{
          console.log(`it's ${this.currentPlayer}'s turn to Play!`);
          alert(`it's ${this.currentPlayer}'s turn to Play!`);}
      },

      // functionality to end game.
        gameOver(){
         if (
             !gameBoard.boardArray.includes(null) || 
             scoreBoard.playerOneScore[1] === 5 || 
             scoreBoard.playerTwoScore[1] === 5){
               alert("GAMEOVER!!");
               console.log("GameOver");
              }else{
                this.continueGame();
              }
      }
   
}

     let playerOneWins = false;
     let playerTwoWins = false;  
// digital representation of a physical score board.
 const scoreBoard = {

    playerOneScore: [person.playerOneName, 0],
    playerTwoScore: [person.playerTwoName, 0]

 };

 function updateScoreBoard(){

  const winner = scoreCondition();

   if (winner === "X") {scoreBoard.playerOneScore[1] += 1;
        is_winner= true;
        alert(`${scoreBoard.playerOneScore[0]} has scored 1 point`);
        console.log(`${scoreBoard.playerOneScore[0]} has scored 1 point`);
   } 
   else if (winner === "O") {scoreBoard.playerTwoScore[1] += 1;
        is_winner= true;
        alert(`${scoreBoard.playerTwoScore[0]} has scored 1 point`);
        console.log(`${scoreBoard.playerTwoScore[0]} has scored 1 point`);
  };
 };


  function scoreCondition(){
     const b = gameBoard.boardArray;

     const wins = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];

  for (let combo of wins) {
    const [x, y, z] = combo;

    if (b[x] && b[x] === b[y] && b[x] === b[z]) {
      return b[a] === "X" ? "O"  : "X";
      
    }
  }
    return null; // no winner yet
       
  };

  //Start button
const button = document.querySelector(".button");
button.addEventListener("click",()=>{
  control.playGame();
  button.textContent= "RESTART";
  reset()
});

  function reset(){
   
   if( scoreCondition ==="X"|| scoreCondition === "O"){
    gameBoard.boardArray = [null,null,null,
                            null,null,null,
                            null,null,null];
    // control.gameStart = true;
    //  container.textContent=scoreBoard.playerOneScore[1];
    // container.textContent= scoreBoard.playerTwoScore[1];
   } else if (button.textContent === "RESTART" ){
    gameBoard.boardArray = [null,null,null,
                            null,null,null,
                            null,null,null];
    control.gameStart = true;
    scoreBoard.playerOneScore[1] = 0;
    scoreBoard.playerTwoScore[1] = 0;
   }
    return gameBoard.boardArray, control.gameStart, scoreBoard.playerOneScore,scoreBoard.playerTwoScore;
  }

  
