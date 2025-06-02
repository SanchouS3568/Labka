let BOARD_SIZE = 8;
let NUM_MINES = Math.floor((BOARD_SIZE * BOARD_SIZE) / 6);
let board = [];
let mines = [];
let flags = [];
let gameOver = false;

document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
    document.getElementById('reset-button').style.display = 'none';
});

function initializeGame() {
    const sizeInput = document.getElementById('board-size');
    BOARD_SIZE = parseInt(sizeInput.value);
    NUM_MINES = Math.floor((BOARD_SIZE * BOARD_SIZE) / 6);
    initializeBoard();
}

function initializeBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    gameBoard.style.gridTemplateColumns = `repeat(${BOARD_SIZE}, 40px)`;
    gameBoard.style.gridTemplateRows = `repeat(${BOARD_SIZE}, 40px)`;
    board = [];
    mines = [];
    flags = [];
    gameOver = false;

    for (let i = 0; i < BOARD_SIZE; i++) {
        board[i] = [];
        for (let j = 0; j < BOARD_SIZE; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', handleLeftClick);
            cell.addEventListener('contextmenu', handleRightClick);
            cell.addEventListener('dblclick', handleDoubleClick);
            gameBoard.appendChild(cell);
            board[i][j] = { mine: false, revealed: false, flagged: false, count: 0 };
        }
    }

    placeMines();
    calculateCounts();
    updateFlagCount();
}

function placeMines() {
    let minesPlaced = 0;
    while (minesPlaced < NUM_MINES) {
        const row = Math.floor(Math.random() * BOARD_SIZE);
        const col = Math.floor(Math.random() * BOARD_SIZE);
        if (!board[row][col].mine) {
            board[row][col].mine = true;
            mines.push({ row, col });
            minesPlaced++;
        }
    }
}

function calculateCounts() {
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (!board[i][j].mine) {
                let count = 0;
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        const newRow = i + x;
                        const newCol = j + y;
                        if (newRow >= 0 && newRow < BOARD_SIZE && newCol >= 0 && newCol < BOARD_SIZE && board[newRow][newCol].mine) {
                            count++;
                        }
                    }
                }
                board[i][j].count = count;
            }
        }
    }
}

function handleLeftClick(event) {
    if (gameOver) return;
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    if (board[row][col].flagged) return;
    if (board[row][col].mine) {
        revealMines();
        gameOver = true;
        alert('Вы проиграли!');
        document.getElementById('reset-button').style.display = 'block';
        return;
    }
    revealCell(row, col);
    checkWin();
}

function handleRightClick(event) {
    event.preventDefault();
    if (gameOver) return;
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    if (board[row][col].revealed) return;
    if (board[row][col].flagged) {
        board[row][col].flagged = false;
        flags = flags.filter(flag => !(flag.row === row && flag.col === col));
    } else {
        board[row][col].flagged = true;
        flags.push({ row, col });
    }
    updateFlagCount();
    renderBoard();
}

function handleDoubleClick(event) {
    if (gameOver) return;
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    if (board[row][col].revealed && board[row][col].count > 0) {
        const flaggedCount = countFlagsAround(row, col);
        if (flaggedCount === board[row][col].count) {
            revealNeighbors(row, col);
        }
    }
}

function countFlagsAround(row, col) {
    let count = 0;
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            const newRow = row + x;
            const newCol = col + y;
            if (newRow >= 0 && newRow < BOARD_SIZE && newCol >= 0 && newCol < BOARD_SIZE && board[newRow][newCol].flagged) {
                count++;
            }
        }
    }
    return count;
}

function revealNeighbors(row, col) {
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            const newRow = row + x;
            const newCol = col + y;
            if (newRow >= 0 && newRow < BOARD_SIZE && newCol >= 0 && newCol < BOARD_SIZE && !board[newRow][newCol].revealed && !board[newRow][newCol].flagged) {
                revealCell(newRow, newCol);
            }
        }
    }
}

function revealCell(row, col) {
    if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE || board[row][col].revealed || board[row][col].flagged) return;
    board[row][col].revealed = true;
    if (board[row][col].count === 0) {
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                revealCell(row + x, col + y);
            }
        }
    }
    renderBoard();
}

function revealMines() {
    mines.forEach(mine => {
        board[mine.row][mine.col].revealed = true;
    });
    renderBoard();
}

function checkWin() {
    let unrevealedCount = 0;
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (!board[i][j].revealed && !board[i][j].mine) {
                unrevealedCount++;
            }
        }
    }
    if (unrevealedCount === 0) {
        gameOver = true;
        alert('Вы выиграли!');
        document.getElementById('reset-button').style.display = 'block';
    }
}

function updateFlagCount() {
    const flagCount = flags.length;
    document.getElementById('flag-count').textContent = `${flagCount} / ${NUM_MINES}`;
}

function renderBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.querySelectorAll('.cell').forEach(cell => {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        if (board[row][col].revealed) {
            cell.classList.add('revealed');
            if (board[row][col].mine) {
                cell.classList.add('mine');
            } else {
                cell.textContent = board[row][col].count > 0 ? board[row][col].count : '';
            }
        } else if (board[row][col].flagged) {
            cell.classList.add('flagged');
        } else {
            cell.classList.remove('revealed', 'flagged', 'mine');
            cell.textContent = '';
        }
    });
}

function resetGame() {
    initializeGame();
    document.getElementById('reset-button').style.display = 'none';
}