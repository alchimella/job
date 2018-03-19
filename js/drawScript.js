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