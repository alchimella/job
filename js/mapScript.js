let score = 0;
let snake = [];
let snakeSize = 7;
let widthMap = 500;
let heightMap = 450;
let apple;
let direction = 'down';

function init() {

    let myCanvas = document.getElementById("myCanvas");
    window.ctx = myCanvas.getContext("2d");
    Draw.drawSnake(10, 10);
    Draw.drawApple(15, 17);
    Draw.outputScore();
    Snake.createSnake();
    Snake.stepSnake();
    Draw.main();
    keyboardEvent();
}


