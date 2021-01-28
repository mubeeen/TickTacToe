export default class ValidateWin {
    count = 1;
    constructor() { 
    
    }
    
    isWin(board) {
        let size = 4;
        //For rows
        for(let i = 0; i < size ; i++) {
            if((board['c' + ((size * i) + 1)] === board['c' + ((size * i) + 2)] && board['c' + ((size * i) + 2)] === board['c' + ((size * i) + 3)] && board['c' + ((size * i) + 3)] === board['c' + ((size * i) + 4)]) && (board['c' + ((size * i ) + 1)] != '-'))  return true;
        }

        /*if((board['c1'] === board['c2'] && board['c2'] === board['c3'] && board['c3'] === board['c4']) && board['c1'] != '-')   return true;
        if((board['c5'] === board['c6'] && board['c6'] === board['c7'] && board['c7'] === board['c8']) && board['c5'] != '-')  return true;
        if((board['c9'] === board['c10'] && board['c10'] === board['c11'] && board['c11'] === board['c12']) && board['c9'] != '-')   return true;
        if((board['c13'] === board['c14'] && board['c14'] === board['c15'] && board['c16'] === board['c16']) && board['c13'] != '-')   return true;
        */

        //generic check for coloumns
        /*for(let i = 0; i < size ; i++) {
            if ((board['c'+((size * i) + this.count)] === board['c'+ ((size * i) + (this.count + 4))] && board['c' + ((size * i) + (this.count + 4))] === board['c' + ((size * i) + (this.count + 8))] && board['c'+ ((size * i) + (this.count + 8))] === board['c'+ ((size * i) + (this.count + 12))]) && (board['c' + ((size * i) + (this.count))] != '-'))   return true;    
            this.count++;
        }*/

        //for coloumn
        if((board['c1'] === board['c5'] && board['c5'] === board['c9'] && board['c9'] === board['c13'])&& board['c1'] != '-')   return true;
        if((board['c2'] === board['c6'] && board['c6'] === board['c10'] && board['c10'] === board['c14'])&& board['c2'] != '-')   return true;
        if((board['c3'] === board['c7'] && board['c7'] === board['c11'] && board['c11'] === board['c15']) && board['c3'] != '-')  return true;
        if((board['c4'] === board['c8'] && board['c8'] === board['c12'] && board['c12'] === board['c16']) && board['c4'] != '-')   return true;
        

        //diagnols
        if((board['c1'] === board['c6'] && board['c6'] === board['c11'] && board['c11'] === board['c16']) && board['c1'] != '-')   return true;
        if((board['c4'] === board['c7'] && board['c7'] === board['c10'] && board['c10'] === board['c13'])&& board['c4'] != '-')   return true;
    
    }
    
    isDraw(board) {                         //check incase of match drawn
        let flag = true;
        for(let i in board) {
            if(board[i] === '-') {
                flag = false;
            }
        }
        return flag;
    }

    whoIsWinner(scoreCard) {
        let gameWinner = "";
        
        if(scoreCard.X > scoreCard.O) {
            gameWinner = "X";
        }
        else if(scoreCard.O > scoreCard.X) {
            gameWinner = "O";
        }
        else {
            gameWinner = "Draw";
        }

        return gameWinner;
    }

}