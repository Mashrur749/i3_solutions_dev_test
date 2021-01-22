export class Connect4 {
    currentPlayer : number;
    colLen : number;
    rowLen : number;
    isGameFinished : boolean;
    boardCols : number[][];

    constructor() {
        //playerTurn: the player playing now
        this.currentPlayer = 1;
        this.colLen = 7;
        this.rowLen = 6;
        this.isGameFinished = false;

        this.boardCols = [];

        for (let i = 0; i < this.colLen; i++) {
            let col = [];
            for (let j = 0; j < this.rowLen; j++) {
                col.push(0);
            }
            this
                .boardCols
                .push(col);
        }
    }

    play(col : number) : string {

        let report: string = "";

        if (!this.isGameFinished) {
            let turnRow : number = null;
            let colFound : boolean = false;
            for (let i = 0; i < this.colLen && colFound == false; i++) {
                if (this.boardCols[col][i] === 0) {
                    this.boardCols[col][i] = this.currentPlayer;
                    turnRow = i;
                    colFound = true;
                }

                if (!colFound) {
                    report = "Column full!";
                } else {
                    report = `Player ${this.currentPlayer} has a turn`
                }
            }

            if (this.isWin(turnRow, col)) {
                report = `Player ${this.currentPlayer} wins!`
                this.isGameFinished = true;
            }

            if (this.currentPlayer === 1) {
                this.currentPlayer = 2;
            } else {
                this.currentPlayer = 1;
            }

        } else {
            report = "Game has finished!";
        }

        return report;
    }

    isWin(row, col) {
        let win : boolean = false;
        if (this.diagonalWin(row, col) || this.horizontalWin(row, col) || this.verticalWin(row, col)) {
            win = true;
        }
        return win;
    }

    verticalWin(row, col) {
        let win : boolean = false;
        let check : number = 0;

        if (row >= 3) {

            for (let i = row; i !== row - 4; i--) {
                if (this.boardCols[col][i] === this.currentPlayer) {
                    check++;
                }
            }
        }

        if (check === 4) {
            win = true;
        }

        return win;
    }

    horizontalWin(row, col) {
        let win : boolean = false;
        let check : number = 0;
        for (let i = 0; i < this.colLen; i++) {

            if (this.boardCols[i][row] == this.currentPlayer) {
                check++;
                if (check === 4) {
                    win = true;
                    break;
                }
            } else {
                check = 0;
            }
        }
        return win;
    }

    diagonalWin(row, col) {
        let check:number = 1;
        let win:boolean = false;

        for (let i = 1; i < 4 && win === false; i++) {

            //top-right from current block check
            if (!win && col + i < this.colLen && row + i < this.rowLen && this.boardCols[col + i][row + i] === this.currentPlayer) {
                check++;
                if (check == 4) {
                    win = true;
                }
            }

            //bottom-left from current block check
            if (!win && col - i >= 0 && row - i >= 0 && this.boardCols[col - i][row - i] === this.currentPlayer) {
                check++;
                if (check == 4) {
                    win = true;
                }
            }

            //reset check
            check = 0;

            //top-left from current block check

            if (!win && col - i >= 0 && row + i < this.rowLen && this.boardCols[col - i][row + i] === this.currentPlayer) {
                check++;
                if (check == 4) {
                    win = true;
                }
            }

            //bottom-right from current block check

            if (!win && col + i < this.colLen && row - i >= 0 && this.boardCols[col + i][row - i] === this.currentPlayer) {
                check++;
                if (check == 4) {
                    win = true;
                }
            }

        }

        return win;
    }

}