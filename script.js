const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("startButton");
const gameOverModal = document.getElementById("gameOverModal");
const finalScoreDisplay = document.getElementById("finalScore");
const restartButton = document.getElementById("restartButton");

// Initial snake position and speed
let snake = [{ x: 200, y: 200 }];
let dx = 0;
let dy = 0;

// Initial apple position
let apple = { x: 100, y: 100 };

// Game speed
const speed = 150;

// Score
let score = 0;

// Interval ID for game loop
let intervalId;

// Function to draw snake
function drawSnake() {
    snake.forEach(segment => {
        ctx.fillStyle = "#333";
        ctx.fillRect(segment.x, segment.y, 20, 20);
    });
}

// Function to draw apple
function drawApple() {
    ctx.fillStyle = "red";
    ctx.fillRect(apple.x, apple.y, 20, 20);
}

// Function to move snake
function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    if (head.x === apple.x && head.y === apple.y) {
        generateApple();
        score++;
        updateScore();
    } else {
        snake.pop();
    }
}

// Function to generate apple at random position
function generateApple() {
    const x = Math.floor(Math.random() * 20) * 20;
    const y = Math.floor(Math.random() * 20) * 20;
    apple = { x: x, y: y };
}

// Function to check if snake collides with itself or the canvas border
function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        return true;
    }
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

// Function to update game state
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawApple();
    drawSnake();
    moveSnake();
    if (checkCollision()) {
        endGame();
    }
}

// Function to update score on the screen
function updateScore() {
    scoreDisplay.textContent = "Score: " + score;
}

// Function to handle keyboard input
function handleKeyPress(event) {
    const key = event.key;
    if (key === "ArrowUp" && dy !== 20) {
        dx = 0;
        dy = -20;
    } else if (key === "ArrowDown" && dy !== -20) {
        dx = 0;
        dy = 20;
    } else if (key === "ArrowLeft" && dx !== 20) {
        dx = -20;
        dy = 0;
    } else if (key === "ArrowRight" && dx !== -20) {
        dx = 20;
        dy = 0;
    }
}

// Function to start the game
function startGame() {
    score = 0;
    updateScore();
    resetSnake();
    generateApple();
    intervalId = setInterval(update, speed);
    startButton.style.display = "none";
    window.addEventListener("keydown", handleKeyPress);
}

// Function to end the game
function endGame() {
    clearInterval(intervalId);
    gameOverModal.style.display = "block";
    finalScoreDisplay.textContent = "Your Score: " + score;
    window.removeEventListener("keydown", handleKeyPress);
}

// Function to restart the game
function restartGame() {
    gameOverModal.style.display = "none";
    startGame();
}

// Function to reset the snake position
function resetSnake() {
    snake = [{ x: 200, y: 200 }];
    dx = 0;
    dy = 0;
}

const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");

upButton.addEventListener("click", () => handleArrowClick("ArrowUp"));
downButton.addEventListener("click", () => handleArrowClick("ArrowDown"));
leftButton.addEventListener("click", () => handleArrowClick("ArrowLeft"));
rightButton.addEventListener("click", () => handleArrowClick("ArrowRight"));

function handleArrowClick(direction) {
    if (direction === "ArrowUp" && dy !== 20) {
        dx = 0;
        dy = -20;
    } else if (direction === "ArrowDown" && dy !== -20) {
        dx = 0;
        dy = 20;
    } else if (direction === "ArrowLeft" && dx !== 20) {
        dx = -20;
        dy = 0;
    } else if (direction === "ArrowRight" && dx !== -20) {
        dx = 20;
        dy = 0;
    }
}


startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);

function showCalculator() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('calculator').style.display = 'flex';
}

function showHome() {
    document.getElementById('Clock').style.display = 'none';
    document.getElementById('game').style.display = 'none';
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('home-screen').style.display = 'flex';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var displayValue = document.getElementById('display').value;
    try {
        var result = eval(displayValue);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function showGame() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}

let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchTime = 0;

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

function updateStopwatch() {
    const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
    const seconds = String(stopwatchTime % 60).padStart(2, '0');

    const stopwatchString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("stopwatch").textContent = stopwatchString;
}

function toggleStopwatch() {
    if (!stopwatchRunning) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            updateStopwatch();
        }, 1000);
        document.getElementById("startStopBtn").textContent = "Stop";
    } else {
        clearInterval(stopwatchInterval);
        document.getElementById("startStopBtn").textContent = "Start";
    }
    stopwatchRunning = !stopwatchRunning;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    stopwatchTime = 0;
    updateStopwatch();
    document.getElementById("startStopBtn").textContent = "Start";
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();

function showClock() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('Clock').style.display = 'block';
}


function showMemoryMatch() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('memory-match').style.display = 'flex';
    startMemoryGame();
}

const cardsArray = [
    { name: 'card1', img: 'Images/Card1-Image-18.png' },
    { name: 'card2', img: 'Images/Card2-Image-18.png' },
    { name: 'card3', img: 'Images/Card3-Image-18.png' },
    { name: 'card4', img: 'Images/Card4-Image-18.png' },
    { name: 'card5', img: 'Images/Card5-Image-18.png' },
    { name: 'card6', img: 'Images/Card6-Image-18.png' },
];

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function startMemoryGame() {
    // Reset necessary game state variables
    cardsChosen = [];
    cardsChosenId = [];
    cardsWon = [];

    // Clear the game board
    const gameBoard = document.getElementById('memory-game');
    gameBoard.innerHTML = '';

    // Generate and add new cards to the game board
    const cards = [...cardsArray, ...cardsArray].sort(() => 0.5 - Math.random());

    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = index;
        cardElement.dataset.name = card.name;

        const cardImage = document.createElement('img');
        cardImage.src = 'Images/card-back.png'; // Path to the back of the card image
        cardImage.dataset.src = card.img; // Path to the front of the card image
        cardElement.appendChild(cardImage);

        cardElement.addEventListener('click', flipCard);

        gameBoard.appendChild(cardElement);
    });
}

function flipCard() {
    const cardId = this.dataset.id;
    const cardImage = this.querySelector('img');

    if (cardsChosenId.includes(cardId) || cardsChosen.length === 2) {
        return;
    }

    cardImage.src = cardImage.dataset.src;
    cardsChosen.push(this.dataset.name);
    cardsChosenId.push(cardId);
    this.classList.add('flipped');

    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('.card');
    const [optionOneId, optionTwoId] = cardsChosenId;

    if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].querySelector('img').src = 'Images/card-back.png';
        cards[optionTwoId].querySelector('img').src = 'Images/card-back.png';
        cards[optionOneId].classList.remove('flipped');
        cards[optionTwoId].classList.remove('flipped');
    }

    cardsChosen = [];
    cardsChosenId = [];

    if (cardsWon.length === cardsArray.length) {
        showCongratulationsModal();
    }
}

function showHome() {
    document.getElementById('Clock').style.display = 'none';
    document.getElementById('game').style.display = 'none';
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('memory-match').style.display = 'none';
    document.getElementById('home-screen').style.display = 'flex';
}

function showCongratulationsModal() {
    const congratulationsModal = document.getElementById("congratulationsModal");
    congratulationsModal.style.display = "block";

    // Close the modal when the close button or outside the modal area is clicked
    const closeButton = document.querySelector(".modal-content .close");
    closeButton.addEventListener("click", function () {
        congratulationsModal.style.display = "none";
    });
    window.addEventListener("click", function (event) {
        if (event.target === congratulationsModal) {
            congratulationsModal.style.display = "none";
        }
    });

    // Restart the game when the restart button is clicked
    const restartButton = document.getElementById("restartButton2");
    restartButton.addEventListener("click", function () {
        congratulationsModal.style.display = "none";
        startMemoryGame(); // Assuming startMemoryGame() is the function to restart the game
    });
}


restartButton.addEventListener("click", function () {
    congratulationsModal.style.display = "none";
    startMemoryGame();
});
