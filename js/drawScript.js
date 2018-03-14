class Draw {
    drawSnake(x, y) {
        ctx.fillStyle = 'green';
        ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'red';
        ctx.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    }

    drawApple(x, y) {
        ctx.fillStyle = "red";
        ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
        ctx.fillStyle = "blue";
        ctx.fillRect(x * snakeSize + 1, y * snakeSize + 1, snakeSize - 2, snakeSize - 2);
    }

    outputScore() {
        let scoreText = "Your score: " + score;
        ctx.fillStyle = 'blue';
        ctx.fillText(scoreText, 145, heightMap - 5);
    }

    /*paint() {
        ctx. fillStyle = 'lightgrey';
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, width, height);

    }*/
}