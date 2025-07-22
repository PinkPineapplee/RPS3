const container= document.querySelector("div");
let turn = X;

 const board ={
    array :[2,2,2,2,2,2,2,2,2,2]

 }

 const person = {
   person1: X,
    person2: O,
 }

 function gameStart(){};
 function GameOver(){};
 function SwitchPlayer(){
   if (turn === x){
      player = O;
      countinuegame();
   } 
 };