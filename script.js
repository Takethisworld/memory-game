const container = document.createElement('div');
const body = document.body;

const header = document.createElement('header');
const newGameButton = document.createElement('button');
const leaderBoardButton = document.createElement('button');
const scoreDisplay = document.createElement('div');

const gameBoard = document.createElement('div');
const gameActive = false;
const firstCard = null;
const lockBoard = false;

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
container.className = 'game_body';

const startScreen = document.createElement('div');
startScreen.className = 'start_screen';
startScreen.textContent = 'Welcome to the Emoji Memory Game! Click "New Game" to start.';
container.appendChild(header);
container.appendChild(gameBoard);
container.appendChild(startScreen);
body.appendChild(container);

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
    const cardsitem = [...emojis, ...emojis];
    const shuffledEmojis = shuffleEmojis(cardsitem);
    initializeGame();

    shuffledEmojis.forEach((emoji) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.emoji = emoji;
        card.textContent = '';
        card.addEventListener('click', () => cardsToggle(card));
        gameBoard.appendChild(card);
        startScreen.remove();
    });
};



const cardsToggle = (card) => {
    if (lockBoard || card.classList.contains('matched') || card.classList.contains('flipped')) return;

    card.classList.add('flipped');
    card.textContent = card.dataset.emoji;

    if (card === selectedCard) {
        console.log('Same card clicked');
    } else if (selectedCard && selectedCard.dataset.emoji === card.dataset.emoji) {
        card.classList.add('matched');
        selectedCard.classList.add('matched');
        score += 10;
        scoreDisplay.textContent = `Score: ${score}`;
    }
}



newGameButton.addEventListener('click', () => startNewGame());
