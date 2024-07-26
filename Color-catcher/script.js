let score = 0;
let basketColor = 'red';
const colors = ['red', 'blue', 'green', 'yellow'];
const gameContainer = document.getElementById('game-container');
const basket = document.getElementById('basket');
const scoreDisplay = document.getElementById('score');
const tutorialModal = document.getElementById('tutorialModal');
const closeModal = document.querySelector('.close');
const startGameBtn = document.getElementById('startGameBtn');

function changeBasketColor() {
    basketColor = colors[Math.floor(Math.random() * colors.length)];
    basket.style.backgroundColor = basketColor;
}

function createBall() {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = Math.floor(Math.random() * (gameContainer.offsetWidth - 30)) + 'px';
    gameContainer.appendChild(ball);

    const fallInterval = setInterval(() => {
        const ballTop = parseFloat(window.getComputedStyle(ball).getPropertyValue('top'));
        const basketTop = basket.getBoundingClientRect().top - gameContainer.getBoundingClientRect().top;
        const basketLeft = basket.getBoundingClientRect().left - gameContainer.getBoundingClientRect().left;
        const basketRight = basket.getBoundingClientRect().right - gameContainer.getBoundingClientRect().left;
        const ballLeft = ball.getBoundingClientRect().left - gameContainer.getBoundingClientRect().left;
        const ballRight = ball.getBoundingClientRect().right - gameContainer.getBoundingClientRect().left;

        if (ballTop + 30 >= basketTop && ballLeft >= basketLeft && ballRight <= basketRight) {
            if (ball.style.backgroundColor === basketColor) {
                score += 10;
            } else {
                score -= 5;
            }
            scoreDisplay.innerText = `Score: ${score}`;
            gameContainer.removeChild(ball);
            clearInterval(fallInterval);
        } else if (ballTop >= gameContainer.offsetHeight - 30) {
            gameContainer.removeChild(ball);
            clearInterval(fallInterval);
        }
    }, 10);
}

function moveBasket(event) {
    const basketX = event.clientX - gameContainer.getBoundingClientRect().left - basket.offsetWidth / 2;
    basket.style.left = `${Math.max(0, Math.min(basketX, gameContainer.offsetWidth - basket.offsetWidth))}px`;
}

function handleTouchMove(event) {
    const touch = event.touches[0];
    const basketX = touch.clientX - gameContainer.getBoundingClientRect().left - basket.offsetWidth / 2;
    basket.style.left = `${Math.max(0, Math.min(basketX, gameContainer.offsetWidth - basket.offsetWidth))}px`;
}

function handleClick(event) {
    const clickY = event.clientY - gameContainer.getBoundingClientRect().top;
    const basketTop = basket.getBoundingClientRect().top - gameContainer.getBoundingClientRect().top;

    if (clickY < basketTop) {
        changeBasketColor();
    }
}

function openModal() {
    tutorialModal.style.display = 'flex';
}

function closeModalFunc() {
    tutorialModal.style.display = 'none';
}

gameContainer.addEventListener('mousemove', moveBasket);
gameContainer.addEventListener('touchmove', handleTouchMove);
gameContainer.addEventListener('click', handleClick);
startGameBtn.addEventListener('click', closeModalFunc);
closeModal.addEventListener('click', closeModalFunc);
window.addEventListener('load', openModal);
setInterval(createBall, 1000);