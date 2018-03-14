function createSnake() {
    for (let i = 0; i < snakeSize.length; i++) {
        snake.push({x:1, y:0});
    }
}

function stepSnake() {
    for (let i = snakeSize.length; i > 0; --i) {
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }
    if (direction == 0) snake[0].y += 1;
    if (direction == 1) snake[0].x -= 1;
    if (direction == 2) snake[0].y -= 1;
    if (direction == 3) snake[0].x += 1;

}

function checkCollapse(x, y, snakeArray) {
    for (let i = 0; i < snakeArray.length; i++) {
        if(snakeArray[i].x === x && snakeArray[i].y === y) {
            return true;
        }
        return false;
    }
}

function eatApple() {
    for (let i = 0; i < 10; i++) {
        if (snake[0].x == apple.xApple) {

        }
    }
}