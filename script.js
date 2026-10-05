const body = document.querySelector('body');

const header = document.createElement('header');
const newGameButton = document.createElement('button');
const leaderBoardButton = document.createElement('button');
const scoreDisplay = document.createElement('div');

const gameBoard = document.createElement('div');

newGameButton.textContent = 'New Game';
leaderBoardButton.textContent = 'Leaderboard';
scoreDisplay.textContent = 'Score: 0';

header.appendChild(newGameButton);
header.appendChild(leaderBoardButton);
header.appendChild(scoreDisplay);
body.appendChild(header);
body.appendChild(gameBoard);

newGameButton.className = 'new_game-button';
leaderBoardButton.className = 'leaderboard_button';
gameBoard.className = 'game_board';
body.className = 'game_body';

let score = 0;
const emojis = ['🍎', '🍌', '🍇', '🍒', '🍉', '🍍'];

function initializeGame() {
    // Clear previous cards if any
    gameBoard.innerHTML = '';
}

emojis.forEach((emoji) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = emoji;
    gameBoard.appendChild(card);
});