export default class player {

    player1 = 'X';
    player2 = 'O';

    currPlayer = '';

    constructor(size) {
        this.size = size;                                         //getting user on random basis
        let number = Math.floor(Math.random() * 2);  
        number === 1 ? this.currPlayer = this.player1 : this.currPlayer = this.player2;
    }
    getPlayer() {                                              //get the value of current player
        return this.currPlayer;
    }
    setPlayer(currPlayer) {                                     //setting the value of current player
        this.currPlayer = currPlayer;
    }
    togglePlayer() {                                            //toggle the player
        if(this.currPlayer === 'X'){    
            this.currPlayer = 'O';
            this.setCursonPointer(this.currPlayer);
        }
        else {
            this.currPlayer = 'X';
            this.setCursonPointer(this.currPlayer);
        }
    }
    setCursonPointer(currPlayer) {                                  //changing the mouse pointer on every player change
        if(currPlayer === 'X') {
            for(let i=1;i<=this.size;i++) {
                document.getElementById('c'+ i).style.cursor = "progress";
            }
        }
        else {
            for(let i=1;i<=this.size;i++) {
                document.getElementById('c'+ i).style.cursor = "cell";
            }
        }
    }

}