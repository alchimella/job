let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
let scale = 10;
let score = 0;
let widthBlock = width / scale;
let heightBlock = height / scale;

function drawBoard() {
    ctx.fillStyle = '#4682B4';
    ctx.fillRect(0, 0, width, scale);
    ctx.fillRect(0, height - scale, width, scale);
    ctx.fillRect(0, 0, scale, height);
    ctx.fillRect(width - scale, 0, scale, height);
}

function outputScore() {
    ctx.font = "14px Verdana";
    ctx.fillStyle = '#000000';
    ctx.fillText(`Your score: ${score}`, 15, 25);
}

function gameOver() {
    clearInterval(init);
    ctx.font = "60px Verdana";
    ctx.fillStyle = '#cc0000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("GAME OVER!", width / 2, height / 2);
}

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
};

drawBlock.prototype.drawApple = function() {
    let x = this.col * scale + scale / 2;
    let y = this.row * scale + scale / 2;
    ctx.beginPath();
    ctx.fillStyle = '#cc0000';
    ctx.arc(x, y, 5, 0, 2 * Math.PI, true);
    ctx.fill();
};

drawBlock.prototype.equal = function (otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let Snake = function() {
    this.snake = [
        new drawBlock(8, 5),
        new drawBlock(7, 5),
        new drawBlock(6, 5),
        new drawBlock(5, 5)
    ];

    this.direction = "right";
    this.nextDirection = "right";
};

Snake.prototype.createSnake = function() {
    for (let i = 0; i < this.snake.length; i++) {
        this.snake[i].drawSnake();
    }
};

Snake.prototype.moveSnake = function() {
    let head = this.snake[0];
    let newHead;
    this.direction = this.nextDirection;

    if (this.direction === "right") {
        newHead = new drawBlock(head.col + 1, head.row);
    }
    if (this.direction === "down") {
        newHead = new drawBlock(head.col, head.row + 1);
    }
    if (this.direction === "left") {
        newHead = new drawBlock(head.col - 1, head.row);
    }
    if (this.direction === "up") {
        newHead = new drawBlock(head.col, head.row - 1);
    }

    if (this.checkCollapse(newHead)) {
        gameOver();
        return;
    }

    this.snake.unshift(newHead);

    if (newHead.equal(apple.position)) {
        score++;
        apple.moveApple();
    } else {
        this.snake.pop();
    }
};

Snake.prototype.checkCollapse = function(head){
    let leftCollapse = (head.col === 0);
    let rightCollapse = (head.row === 0);
    let topCollapse = (head.col === widthBlock - 1);
    let bottomCollapse = (head.row === widthBlock - 1);
    let wallCollapse = leftCollapse || rightCollapse || topCollapse || bottomCollapse;
    let selfCollapse = false;

    for (let i = 0; i < this.snake.length; i++) {
        if (head.equal(this.snake[i])) {
            selfCollapse = true;
        }
    }

    return wallCollapse || selfCollapse;
};

Snake.prototype.setDirection = function(newDirection) {
  if (this.direction === "up" && newDirection === "down") {
      return;
  } else if (this.direction === "right" && newDirection === "left") {
      return;
  } else if (this.direction === "left" && newDirection === "right") {
        return;
  } else if (this.direction === "down" && newDirection === "up") {
        return;
  }

  this.nextDirection = newDirection;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let Apple = function() {
    this.position = new drawBlock(10, 10);
};

Apple.prototype.createApple = function() {
    this.position.drawApple();
};

Apple.prototype.moveApple = function() {
    let randCol = Math.floor(Math.random() * (widthBlock - 2)) + 1;
    let randRow = Math.floor(Math.random() * (heightBlock - 2)) + 1;
    this.position = new drawBlock(randCol, randRow);
};

let snake = new Snake();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let apple = new Apple();
let direction = {
    65: "left",
    87: "up",
    68: "right",
    83: "down"
};

$("body").keydown(function(event) {
    let newDirection = direction[event.keyCode];
    if (newDirection !== undefined) {
        snake.setDirection(newDirection);
    }
});

let init = setInterval(function() {
    ctx.clearRect(0, 0, width, height);
    drawBoard();
    outputScore();
    snake.createSnake();
    snake.moveSnake();
    apple.createApple();
}, 120);
