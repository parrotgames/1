.homebody {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #1b1b1b;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.box {
    width: 150px;
    height: 150px;
    background: linear-gradient(145deg, #333, #555);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.box:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

.box img {
    width: 100%;
    height: 122px;
    object-fit: cover;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.box span {
    font-size: 18px;
    padding: 5px 0;
    text-align: center;
    margin-bottom: 10px;
}

.calculator {
    width: 320px;
    border-radius: 10px;
    background-color: #222;
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    display: none;
    flex-direction: column;
    align-items: center;
}

#display {
    width: calc(100% - 40px);
    margin-bottom: 20px;
    padding: 15px;
    font-size: 28px;
    border: none;
    border-radius: 10px;
    background-color: #333;
    color: #fff;
    text-align: right;
    outline: none;
}

.keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    padding: 15px;
    font-size: 24px;
    border: none;
    border-radius: 10px;
    background-color: #444;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
    outline: none;
}

button:hover {
    background-color: #555;
}

.operator {
    background-color: #ff6347;
}

.equal {
    background-color: #4caf50;
}

.clear {
    background-color: #f44336;
}

.back-button {
    font-size: 18px;
    border: none;
    border-radius: 10px;
    background-color: #444;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
    outline: none;
}

.back-button:hover {
    background-color: #555;
}

/* Game Styles */

.container-game {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

canvas {
    border: 2px solid #333;
    margin-bottom: 20px;
}

#score {
    color: #ff6347;
    font-size: 24px;
    margin-bottom: 20px;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: #222;
    margin: 20% auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 10px;
    width: 50%;
    text-align: center;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

button:hover {
    background-color: #555;
}

button#upButton,
button#downButton,
button#leftButton,
button#rightButton {
    width: 60px;
    height: 60px;
    font-size: 24px;
    background-color: #444;
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.1s, box-shadow 0.1s;
    margin: 5px;
    padding: 10px;
    /* Increase touch target area */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    /* Add shadow effect */
}

/* Style for arrow buttons on hover */
button#upButton:hover,
button#downButton:hover,
button#leftButton:hover,
button#rightButton:hover {
    background-color: #555;
}

/* Style for arrow buttons when pressed */
button#upButton:active,
button#downButton:active,
button#leftButton:active,
button#rightButton:active {
    transform: scale(0.95);
    box-shadow: none;
    /* Remove shadow effect when pressed */
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

#clock {
    font-size: 48px;
    margin-bottom: 20px;
}

#stopwatch {
    font-size: 32px;
    margin-bottom: 20px;
}

.btn {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

#clock {
    font-family: Arial, sans-serif;
    color: white;
}

#stopwatch {
    font-family: Arial, sans-serif;
    color: white;
}

#clockbtn {
    margin-top: 10px;
    background-color: #333;
    border: none;
    border-radius: 5px;
}


.memory-match {
    height: 350px;
    width: 320px;
    border-radius: 10px;
    background-color: #222;
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    display: none;
    flex-direction: column;
    align-items: center;
}

.memory-game {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 20px;
}

.container h2 {
    color: white;
}

.memory-game .card {
    width: 60px;
    height: 60px;
    background-color: #444;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.memory-game .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
}

.memory-game .card.flipped img {
    display: block;
}

.memory-game .card.flipped {
    transform: rotateY(180deg);
}

#memory-game-btn-home {
    margin-top: 10px;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: #222;
    margin: 20% auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 10px;
    width: 50%;
    text-align: center;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}
