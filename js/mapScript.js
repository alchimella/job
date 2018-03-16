let score = 0;
let scale = 10;
let snakeSize = 4;
let widthMap = 500;
let heightMap = 500;
let widthBlock = widthMap / scale;
let heightBlock = heightMap / scale;
let apple;
let direction = 'right';

function init() {
    let canvas = document.getElementById("canvas");
    window.ctx = canvas.getContext("2d");
    ctx.fillStyle = '#3333ff';
    ctx.fillRect(0, 0, widthMap, scale);
    ctx.fillRect(0, heightMap - scale, widthMap, scale);
    ctx.fillRect(0, 0, scale, heightMap);
    ctx.fillRect(widthMap - scale, 0, scale, heightMap);

    Draw.block(5, 5);
    Draw.drawSnake();
    Draw.drawApple(15, 17);
    Snake.createSnake();
    //Snake.stepSnake();
    //Apple.createApple();
    Draw.outputScore();
    //Draw.main();

}


