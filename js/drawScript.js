function drawBlock(col, row) {
        this.col = col;
        this.row = row;
    }

function drawBoard() {
    let canvas = document.getElementById("canvas");
    window.ctx = canvas.getContext("2d");
    ctx.fillStyle = '#4682B4';
    ctx.fillRect(0, 0, widthMap, scale);
    ctx.fillRect(0, heightMap - scale, widthMap, scale);
    ctx.fillRect(0, 0, scale, heightMap);
    ctx.fillRect(widthMap - scale, 0, scale, heightMap);
};

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
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill();
};

function outputScore() {
    ctx.font = "14px Verdana";
    ctx.fillStyle = '#000000';
    ctx.fillText(`Your score: ${score}`, 15, 25);
}

function gameOver() {
    ctx.font = "60px Verdana";
    ctx.fillStyle = '#cc0000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("GAME OVER!", widthMap / 2, heightMap / 2);
}

