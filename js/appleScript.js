function Apple() {
    this.position = new drawBlock(10, 10);
}

Apple.prototype.createApple = function() {
    this.position.drawApple();
};

Apple.prototype.moveApple = function() {
    let randCol = Math.floor(Math.random() * (widthBlock - 2)) + 1;
    let randRow = Math.floor(Math.random() * (heightBlock - 2)) + 1;
    this.position = new drawBlock(randCol, randRow);
}