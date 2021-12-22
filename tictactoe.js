function tictactoe(board) {
    let n = board.length
    let space = false
    for(let i = 0; i < n; i++) {
        let notWin = false
        for(let j = 1; j < n; j++) {
            if (board[i][j] !== board[i][0]) {
                notWin = true
            }
            if (board[i][j] === ' ') {
                space = true
            }
        }
        if (!notWin) {
            return board[i][0]
        }
    }
    for(let j = 0; j < n; j++) {
        let notWin = false
        for(let i = 1; i < n; i++) {
            if (board[i][j] !== board[0][j]) {
                notWin = true
            }
            if (board[i][j] === ' ') {
                space = true
            }
        }
        if (!notWin) {
            return board[0][j]
        }
    }
    let i = 0
    let notWin = false
    while(board[i][i] && board[i][i] !== ' ') {
        if (board[0][0] !== board) {
            notWin = true
        }
        i++
    }
    if (!notWin) {
        return board[0][0]
    }


    i = n - 1 
    let j = n - 1
    notWin = false
    while(board[i][j] && board[i][j] !== ' ') {
        if (board[0][0] !== board) {
            notWin = true
        }
        i++
        j--
    }
    if (!notWin) {
        return board[n - 1][n - 1]
    }


    return space ? 'Pending' : 'Drawing'
}