const grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

let currentPlayer = 'X'

const playTurn = (x, y) => {
    if (grid[x][y] !== null) {
        return false
    }

    grid[x][y] = currentPlayer
    return true
}

const changePlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}

const isWon = () => {
    if (grid[0][0] === currentPlayer && grid[0][1] === currentPlayer && grid[0][2] === currentPlayer) {
        return true
    }
    if (grid[1][0] === currentPlayer && grid[1][1] === currentPlayer && grid[1][2] === currentPlayer) {
        return true
    }
    if (grid[2][0] === currentPlayer && grid[2][1] === currentPlayer && grid[2][2] === currentPlayer) {
        return true
    }
    if (grid[0][0] === currentPlayer && grid[1][0] === currentPlayer && grid[2][0] === currentPlayer) {
        return true
    }
    if (grid[0][1] === currentPlayer && grid[1][1] === currentPlayer && grid[2][1] === currentPlayer) {
        return true
    }
    if (grid[0][2] === currentPlayer && grid[1][2] === currentPlayer && grid[2][2] === currentPlayer) {
        return true
    }
    if (grid[0][0] === currentPlayer && grid[1][1] === currentPlayer && grid[2][2] === currentPlayer) {
        return true
    }
    if (grid[0][2] === currentPlayer && grid[1][1] === currentPlayer && grid[2][0] === currentPlayer) {
        return true
    }
    return false
}

const isDraw = () => {
    if(isWon()) {
        return false
    }
    return grid.every(row => row.every(cell => cell !== null))
}

const reset = () => {
    grid.forEach(row => row.fill(null))
    currentPlayer = 'X'
    document.querySelectorAll('button').forEach(cell => cell.innerText = '')
}

document.querySelectorAll('button').forEach((cell, i) => {
    cell.addEventListener('click', () => {
        const x = Math.floor(i / 3)
        const y = i % 3
        if (playTurn(x, y)) {
            cell.innerText = currentPlayer
            if (isWon()) {
                alert('Player ' + currentPlayer + ' won!')
                reset()
            } else if (isDraw()) {
                alert('Draw!')
                reset()
            }
            changePlayer()
        }
    })
})

