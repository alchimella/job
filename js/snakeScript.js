function stepSnake() {
    let head = snake[0];
    let newHead;
    if (direction === 'right') {
        newHead = Draw.drawBlock(head.col + 1, head.row);
    } else if (direction === 'left') {
        newHead = Draw.drawBlock(head.col, head.row + 1);
    } else if (direction === 'up') {
        newHead = Draw.drawBlock(head.col - 1, head.row);
    } else if (direction === 'down') {
        newHead = Draw.drawBlock(head.col, head.row - 1);
    }
}

function checkCollapse(x, y) {
    for (let i = 0; i < snake.length; i++) {
        if (snake[i].x === -1 || snake[i].x === widthMap / snakeSize || snake[i].y === -1 || snake[i].y === heightMap / snakeSize) {
            ctx.clearRect(0, 0, widthMap, heightMap);
            Draw.gameOver();
            return;
        }
    }
}

function eatApple(block) {
    for (let i = 0; i < 10; i++) {
        if (snake[0].x == apple._xApple && snake[0].y == apple._yApple) {
            snakeSize.length += 1;
        }

        for (let i = 1; i < snakeSize; i++){

        }
    }
}

