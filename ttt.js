var restartb = document.querySelector('#b');
var cells = document.querySelectorAll('td');
var currentPlayer = 'X';
var playerXName = prompt("Enter Player X's Name:");
var playerOName = prompt("Enter Player O's Name:");
var gameStatus = true; // true means game is active, false means game is over

function clearAllCells() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
    currentPlayer = 'X'; // Reset to player X
    gameStatus = true; // Reset game status
}

function checkWinner() {
    var winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        var a = winningCombinations[i][0];
        var b = winningCombinations[i][1];
        var c = winningCombinations[i][2];

        if (cells[a].textContent === currentPlayer &&
            cells[b].textContent === currentPlayer &&
            cells[c].textContent === currentPlayer) {
            if (currentPlayer === 'X') {
                alert('Congratulations, ' + playerXName + ' wins!');
            } else {
                alert('Congratulations, ' + playerOName + ' wins!');
            }
            gameStatus = false; // Set game status to false
            return;
        }
    }

    // Check for draw
    var draw = true;
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].textContent === '') {
            draw = false;
            break;
        }
    }
    if (draw) {
        alert('It\'s a draw!');
        gameStatus = false; // Set game status to false
    }
}

function changeContent() {
    if (this.textContent === '' && gameStatus) { // Check if cell is empty and game is active
        this.textContent = currentPlayer;
        checkWinner(); // Check for winner after each move

        // Switch player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

restartb.addEventListener('click', clearAllCells);

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', changeContent);
}
