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

let snake = new Snake();

let init = setInterval(function() {
    ctx.clearRect(0, 0, width, height);
    drawBoard();
    outputScore();
    snake.createSnake();
    snake.moveSnake();
    apple.createApple();
}, 120);