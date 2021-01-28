
export default class gameBoard {

    row = 0;
    col = 0;

    constructor(row,col) {
        this.row = row;
        this.col = col;
        this.cell = this.row * this.col;
    }

    updateBoardValue(board) {
        for(let i in board) {
            document.getElementById( i ).innerHTML = board[i];
        }
        
    }
    resetBoardValue(board) {
        for(let i in board) {
            board[i] = "-";
        }
    }
    
}