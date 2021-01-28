import player from './player.js';
import gameBoard from './game-board.js';
import ValidateWin from './validate-win.js';

export default class Events {

    constructor(noOfMatch) {
        
        this.noOfMatch = noOfMatch;

        this.scoreCard = {
            totalMatch:0,
            X:0,
            O:0,
            draws:0,
            lastMatchWinner:'',
        }

        this.scoreCard.totalMatch = this.noOfMatch;

        document.getElementById("rm-matches").innerHTML = this.scoreCard.totalMatch;            //setting the val of total matches on UI

        this.size = 16;                                //generaic size of board
        this.board = {                              //board with the size 16

            c1:'-',
            c2:'-',
            c3:'-',
            c4:'-',
            c5:'-',
            c6:'-',
            c7:'-',
            c8:'-',
            c9:'-',
            c10:'-',
            c11:'-',
            c12:'-',
            c13:'-',
            c14:'-',
            c15:'-',
            c16:'-'
        }

        this.player = new player(this.size);                           //creating object of player module
        this.gameBoard = new gameBoard;                     //creating object of gameBoard module
        this.validate = new ValidateWin;

        let a = [];
        
        /* 
            Event listner for win pop up!
        */

        this.btn = document.getElementById("win-btn").addEventListener("click",() => {
            document.getElementById("main-result-screen").style.display = "none";
            document.getElementById("play-game-container").style.display = "block";
        });


        for(let i=1;i<=this.size;i++){
            a[i] = document.getElementById("c" + i);                                //getting the info of specfic cell which is clicked
            a[i].addEventListener("click", () => {
                if(this.isEmpty(i)) {                                               //Check if the index of board is empty or note
                     
                    let myPlayer = this.player.getPlayer();                         //getting current player turn
                    this.board["c" + i] = myPlayer;                                 //updating the board in code
                    //document.getElementById("c" + i ).innerHTML = myPlayer;       //setting the board on UI
                    this.gameBoard.updateBoardValue(this.board);
                    this.player.togglePlayer();                                     //toggling the player
                    document.getElementById("center-score").innerHTML = "Player " + this.player.getPlayer() + " turn!";
                    //console.log(this.board);                                      //displaying th eboard updated values on console

                    if(this.validate.isWin(this.board)) {                           //this check validate the win
                        this.scoreCard.totalMatch -=1;
                        this.player.togglePlayer();                 
                        myPlayer = this.player.getPlayer();                         //get player after toggling
                        
                        if(myPlayer === 'X') {                                       //Both checks to display player 1 and player 2 scores on top
                            this.scoreCard.X += 1;
                            document.getElementById("player1").innerHTML = this.scoreCard.X;
                        }
                        else if(myPlayer === 'O') {
                            this.scoreCard.O += 1;
                            document.getElementById("player2").innerHTML = this.scoreCard.O;
                        }

                        //operation to display the winner name on screen and reset the board for new match
                        this.winnerScreen(myPlayer);

                        this.gameBoard.resetBoardValue(this.board);
                        this.gameBoard.updateBoardValue(this.board);
                    }
                    else if (this.validate.isDraw(this.board)) {                //checking if the match hasbeen drawn or not
                        this.scoreCard.totalMatch -=1;
                        this.scoreCard.draws += 1;

                        this.drawScreen();
                        
                        this.gameBoard.resetBoardValue(this.board);
                        this.gameBoard.updateBoardValue(this.board);
                    }
                    document.getElementById("rm-matches").innerHTML = this.scoreCard.totalMatch;

                    if(this.checkMatchLimitExceed(this.scoreCard)){
                        //comparison who win
                        let fullGameWinner = this.validate.whoIsWinner(this.scoreCard);
                        console.log(fullGameWinner);
                        //display tornament winner screen
                        this.tornamentWinnerScreen(fullGameWinner);
                        //reset everything to 0
                    }
                }
                else {                                                                                //In case of invalid move
                    console.log("Invalid Move");
                    document.getElementById("center-score").innerHTML = "Invalid Move!";
                }
            });
        }           
    }
    isEmpty(i) {
        if(this.board["c" + i] === '-') {                                   //Function to check if the user entered space is empty or not
            return true;
        }
        else {
            return false;
        }
    }
    tornamentWinnerScreen(gameWinner){
        this.winnerAnnouncement(gameWinner);
    }
    checkMatchLimitExceed(scoreCard){
        if(scoreCard.totalMatch === 0) {
            return true;
        }
        return false;
    }
    winnerAnnouncement(winner) {
        document.getElementById("play-game-container").style.display = "none";              //hide the game and show the winner screen
        document.getElementById("main-result-screen").style.display = "none";
        document.getElementById("tournament-winnner-screen").style.display = "block";
        document.getElementById("t-w").innerHTML = winner;

    }
    drawScreen() {
        document.getElementById("draws").innerHTML = this.scoreCard.draws;                  //attempting required opt to clear board for new game
        document.getElementById("player-win").innerHTML = "Match has been drawn";    
        document.getElementById("main-result-screen").style.display = "block";   
        document.getElementById("play-game-container").style.display = "none";
    }
    winnerScreen(myPlayer) {
        document.getElementById("player-win").innerHTML = "Player " + myPlayer + " Wins!";    
        document.getElementById("main-result-screen").style.display = "block";  
        document.getElementById("play-game-container").style.display = "none";
    } 
}