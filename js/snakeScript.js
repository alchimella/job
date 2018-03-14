class Snake {
    static createSnake() {
        for (let i = snakeSize.length; i >= 0; i--) {
            snake.push({x:1, y:0});
        }
    }

    static stepSnake() {
        for (let i = snakeSize.length; i > 0; --i) {
            snake[i].x = snake[i - 1].x;
            snake[i].y = snake[i - 1].y;
        }
        if (direction == 'right') snake[0].x ++;
        if (direction == 'left') snake[0].x --;
        if (direction == 'up') snake[0].y --;
        if (direction == 'down') snake[0].y ++;

    }

    static checkCollapse(x, y) {
        for (let i = 0; i < snake.length; i++) {
            if (snake[i].x == -1 || snake[i].x == widthMap / snakeSize || snake[i].y == -1 || snake[i].y == heightMap / snakeSize) {
                ctx.clearRect(0, 0, widthMap, heightMap);
                return;
            }
        }
    }

    static eatApple() {
        apple = new Apple();
        for (let i = 0; i < 10; i++) {
            if (snake[0].x == apple._xApple && snake[0].y == apple._yApple) {
                snakeSize.length += 1;
            }
            if (snake[0].x > widthMap) direction = 1;
            if (snake[0].x < 0) direction = 2;
            if (snake[0].y < heightMap) direction = 3;
            if (snake[0].y < 0) direction = 0;

            for (let i = 1; i < snakeSize; i++) {
                if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
                    snakeSize = i;
                    prompt("GAME OVER!");
                }
            }
            score++;
            Apple.createApple();
        }
    }
}
