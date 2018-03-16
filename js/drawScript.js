class Draw {
    static block(col, row) {
        this.col = col;
        this.row = row;
    }

    static drawSnake() {
        let x = this.col * scale;
        let y = this.row * scale;
        ctx.fillStyle = '#b3cccc';
        ctx.fillRect(x, y, scale, scale);
        ctx.strokeStyle = '#334d4d';
        ctx.strokeRect(x, y, scale, scale);

    }
    static drawApple(x, y) {
        x = x * scale + scale / 2;
        y = y * scale + scale / 2;
        ctx.beginPath();
        ctx.fillStyle = '#cc0000';
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }

    static outputScore() {
        ctx.font = "14px Verdana";
        ctx.fillStyle = '#000000';
        ctx.fillText(`Your score: ${score}`, 15, 25);
    }

    static gameOver() {
        clearInterval(intervalId);
        ctx.font = "60px Verdana";
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText("GAME OVER!", widthMap / 2, heightMap / 2);
    }
    static main() {
        for(let i = 0; i < snake.length; i++){
            Draw.drawSnake(snake[0].x, snake[0].y);
        }
        this.outputScore();
    }
}