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

Snake.prototype.moveSnake = function() {
    let head = this.snake[0];
    let newHead;

    if (head.direction === "right") {
        newHead = new drawBlock(head.col, head.row + 1);
    }
    if (head.direction === "left") {
        newHead = new drawBlock(head.col + 1, head.row);
    }
    if (head.direction === "up") {
        newHead = new drawBlock(head.col, head.row - 1);
    }
    if (head.direction === "down") {
        newHead = new drawBlock(head.col - 1, head.row);
    }

    this.snake.unshift(newHead);
};
