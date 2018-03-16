function drawBlock(col, row) {
    this.col = col;
    this.row = row;
}

drawBlock.prototype.drawSnake = function() {
    let x = this.col * scale;
    let y = this.row * scale;
    ctx.fillStyle = '#b3cccc';
    ctx.fillRect(x, y, scale, scale);
    ctx.strokeStyle = '#334d4d';
    ctx.strokeRect(x, y, scale, scale);
}

function Snake() {
    this.snake = [
        new drawBlock(7, 5),
        new drawBlock(6, 5),
        new drawBlock(5, 5),
        new drawBlock(4, 5)
    ];
}

Snake.prototype.createSnake = function() {
    for (let i = 0; i < this.snake.length; i++) {
        this.snake[i].drawSnake();
    }
}

function drawApple(x, y) {
    x = x * scale + scale / 2;
    y = y * scale + scale / 2;
    ctx.beginPath();
    ctx.fillStyle = '#cc0000';
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill();
}

function outputScore() {
    ctx.font = "14px Verdana";
    ctx.fillStyle = '#000000';
    ctx.fillText(`Your score: ${score}`, 15, 25);
}

function gameOver() {
    clearInterval(intervalId);
    ctx.font = "60px Verdana";
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("GAME OVER!", widthMap / 2, heightMap / 2);
}

Snake.prototype.keyMove = function () {
    let head = this.snake[0];
    let newHead;

    if (head.direction === 'right') {
        newHead = new drawBlock(head.col, head.row + 1);
    }
    if (head.direction === 'left') {
        newHead = new drawBlock(head.col + 1, head.row);
    }
    if (head.direction === 'up') {
        newHead = new drawBlock(head.col, head.row - 1);
    }
    if (head.direction === 'down') {
        newHead = new drawBlock(head.col - 1, head.row);
    }

    if (head.col === newHead.col && head.row === newHead.row) {
        ctx.clearRect(x, y, scale, scale);
        gameOver();
        return;
    }
}