let score = 0;
let scale = 10;
let widthMap = 500;
let heightMap = 500;
let widthBlock = widthMap / scale;
let heightBlock = heightMap / scale;


function init() {
    drawBoard();
    outputScore();
    let snake = new Snake();
    snake.createSnake();
    let apple = new Apple();
    apple.createApple();
    apple.moveApple();
}


