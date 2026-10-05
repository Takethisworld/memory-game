const body = document.querySelector('body');

const header = document.createElement('header');
const newGameButton = document.createElement('button');
const leaderBoardButton = document.createElement('button');

const gameBoard = document.createElement('div');
const cardsContainer = document.createElement('div');

newGameButton.textContent = 'New Game';
leaderBoardButton.textContent = 'Leaderboard';

header.appendChild(newGameButton);
header.appendChild(leaderBoardButton);
body.appendChild(header);
body.appendChild(gameBoard);
gameBoard.appendChild(cardsContainer);

newGameButton.className = 'new_game-button';
leaderBoardButton.className = 'leaderboard_button';
gameBoard.className = 'game_board';
cardsContainer.className = 'cards_container';

function initializeGame() {
    // Clear previous cards if any
    cardsContainer.innerHTML = '';
}