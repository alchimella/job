function drawBlock(col, row) {
    this.col = col;
    this.row = row;
}

let intervalId = setInterval(function () {
    //ctx.clearRect(0, 0, widthMap, heightMap);
    outputScore();
    snake.snakeMove();
    snake.drawSnake();
    apple.drawApple();
    //drawBlock();
    apple.newApple();
}, 100);

drawBlock.prototype.drawSnake = function() {
    let x = this.col * scale;
    let y = this.row * scale;
    ctx.fillStyle = '#b3cccc';
    ctx.fillRect(x, y, scale, scale);
    ctx.strokeStyle = '#334d4d';
    ctx.strokeRect(x, y, scale, scale);
};

function Snake() {
    this.snake = [
        new drawBlock(7, 5),
        new drawBlock(6, 5),
        new drawBlock(5, 5),
        new drawBlock(4, 5)
    ];

    this.direction = "right";
    this.nextDirection = "right";
}

Snake.prototype.createSnake = function() {
    for (let i = 0; i < this.snake.length; i++) {
        this.snake[i].drawSnake();
    }
};

drawBlock.prototype.drawApple = function() {
    let x = this.x * scale + scale / 2;
    let y = this.y * scale + scale / 2;
    ctx.beginPath();
    ctx.fillStyle = '#cc0000';
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill();
};

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

drawBlock.prototype.equal = function (otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
};

Snake.prototype.checkCollapse = function (head) {
    let leftCollapse = (head.col === 0);
    let topCollapse = (head.row === 0);
    let rightCollapse = (head.col === widthBlock - 1);
    let bottomCollapse = (head.row === heightBlock - 1);
    let wallCollapse = leftCollapse || topCollapse || rightCollapse || bottomCollapse;
    let selfCollapse = false;

    for (let i = 0; i < this.snake.length; i++) {
        if (head.equal(this.snake[i])) {
            selfCollapse = true;
        }
    }
    return wallCollapse || selfCollapse;
};

function key() {
    let direction = {
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };

    function keyDown(event) {
        let newDirection = direction[event.keyCode];
        if(newDirection !== undefined) {
            snake.setDirection(newDirection);
        }
    }
}

Snake.prototype.setDirection = function (newDirection) {
    if (this.direction === "up" && newDirection === "down") {
        return;
    } else if (this.direction === "right" && newDirection === "down") {
        return;
    } else if (this.direction === "down" && newDirection === "up") {
        return;
    } else if (this.direction === "left" && newDirection === "right") {
        return;
    }
    this.nextDirection = newDirection;
};

function Apple() {
    this.position = new drawBlock(10, 10);
}

Apple.prototype.newApple = function () {
    this.position.drawApple();
};

Apple.prototype.appleMove = function () {
  let randomCol = Math.floor(Math.random() * (widthBlock - 2)) + 1;
  let randomRow = Math.floor(Math.random() * (heightBlock - 2)) + 1;
  this.position = new drawBlock(randomCol, randomRow);
};

Snake.prototype.snakeMove = function () {
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

    if (this.checkCollapse(newHead)) {
        gameOver();
        return;
    }

    this.snake.unshift(newHead);

    if (newHead.equal(apple.position)) {
        score++;
        apple.appleMove();
    } else {
        this.snake.pop();
    }
}