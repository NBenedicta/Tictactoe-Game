
let gameBoard = [
    "", "", "",
    "", "", "",
    "", "", ""
];

let currentPlayer = "X";

const cellElements = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset-button");

cellElements.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (gameBoard[index] === "") {
            gameBoard[index] = currentPlayer;
            cell.textContent = currentPlayer;
            checkWin();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

resetButton.addEventListener("click", resetGame);

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert(`Player ${gameBoard[a]} wins!`);
            resetGame();
            return;
        }
    }
}

function resetGame() {
    gameBoard = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];
    currentPlayer = "X";
    cellElements.forEach(cell => cell.textContent = "");
}

