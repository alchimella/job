class Draw {
    static drawSnake(x, y) {
        ctx.fillStyle = '#b3cccc';
        ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = '#334d4d';
        ctx.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    }

    static drawApple(x, y) {
        ctx.beginPath();
        ctx.fillStyle = "#ff1a1a";
        ctx.arc(x * snakeSize, y * snakeSize, 3, 0, 2 * Math.PI);
        /*ctx.fillStyle = "#4d0000";
        ctx.stroke();*/
        ctx.fill();
    }

    static outputScore() {
        let scoreText = "Your score: " + score;
        ctx.fillStyle = 'blue';
        ctx.fillText(scoreText, 145, heightMap - 5);
    }

    static main() {
        /*ctx. fillStyle = 'lightgrey';
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, width, height);*/

        for(let i = 0; i < snake.length; i++){
            Draw.drawSnake(snake[i].x, snake[i].y);
        }
        Draw.drawApple(apple._xApple, apple._yApple);
        this.outputScore();
    }
}