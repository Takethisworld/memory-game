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

const shuffleEmojis = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const startNewGame = () => {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    initializeGame();
    const cardsitem = [...emojis, ...emojis];
    const shuffledEmojis = shuffleEmojis(cardsitem);

    shuffledEmojis.forEach((emoji) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.textContent = emoji;
        gameBoard.appendChild(card);
    });
};

startNewGame();