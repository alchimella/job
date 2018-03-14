let myCanvas = document.getElementById("myCanvas");
let ctx = myCanvas.getContext("2d");

let score = 0;
let snake = [];
let snakeSize = 4;
let width = 500;
let height = 450;
let apple;

class Draw {
    snakeDraw(x, y) {
        ctx.fillStyle = 'green';
        ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'red';
        ctx.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    }

    appleDraw(x, y) {
        ctx.fillStyle = "red";
        ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
        ctx.fillStyle = "blue";
        ctx.fillRect(x * snakeSize + 1, y * snakeSize + 1, snakeSize - 2, snakeSize - 2);
    }

    scoreList() {
        let scoreText = "Your score: " + score;
        ctx.fillStyle = 'blue';
        ctx.fillText(scoreText, 145, height-5);
    }

    paint() {
        ctx. fillStyle = 'lightgrey';
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, width, height);
        startButton.setAttribute('disable', true);

    }

    init() {
        let direction = 'dawn'
    }
}



