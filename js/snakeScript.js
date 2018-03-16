class Snake {
    static createSnake() {
        let snake = [
            Draw.block(6, 5),
            Draw.block(5, 5),
            Draw.block(4, 5)
        ];


        for (let i = 0; i < snake.length; i--) {
            snake[i] = Draw.drawSnake();
            //snake.push({x:i, y:0});
        }
    }

    static stepSnake() {
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (direction == 'right') {
            snakeX++;
        } else if (direction == 'left') {
            snakeX--;
        } else if (direction == 'up') {
            snakeY--;
        } else if (direction == 'down') {
            snakeY++;
        }
    }

    static checkCollapse(x, y) {
        for (let i = 0; i < snake.length; i++) {
            if (snake[i].x == -1 || snake[i].x == widthMap / snakeSize || snake[i].y == -1 || snake[i].y == heightMap / snakeSize) {
                ctx.clearRect(0, 0, widthMap, heightMap);
                return;
            }
        }
    }

    static eatApple(block) {
        /*apple = new Apple();
        for (let i = 0; i < 10; i++) {
            if (snake[0].x == apple._xApple && snake[0].y == apple._yApple) {
                snakeSize.length += 1;
            }

            for (let i = 1; i < snakeSize; i++) {
                if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
                    snakeSize = i;
                    Draw.gameOver();
                    return;
                }
            }
            score++;
            Apple.createApple();
        }*/

    }
}
