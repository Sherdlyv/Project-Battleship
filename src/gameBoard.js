import { ship } from "./ship.js";

export class gameBoard {
    constructor(){
        this.board=[];

         for (let i = 0; i < 10; i++) {
            let row = [];

            for(let j=0; j<10; j++){
                row.push(null);
            }


            this.board.push(row);
         }
        
    }
    
    placeShip(x,y,myShip) {
        this.board [x][y]= myShip;
       }

    receiveAttack(x,y) { 

        let emptyCase = this.board[x][y];

        if(emptyCase !== null) {

            emptyCase.hit();
            return "hit";
        }
        else{
            
            return "miss";
        }







    }


    
    




}