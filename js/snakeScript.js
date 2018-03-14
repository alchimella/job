function snakeBody() {
    for (let i = snakeSize.length; i >= 0; i--){
        snake.push({x:1, y:0});
    }
}
function checkCollapse(x, y, snakeArray) {
    for(let i = 0; i < snakeArray.length; i++){
        if(snakeArray[i].x === x && snakeArray[i].y === y){
            return true;
        }
        return false;
    }
}