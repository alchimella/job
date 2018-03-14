class Apple{
    constructor() {
        this._x = Math.floor(Math.random() * 30) + 1;
        this._y = Math.floor(Math.random() * 30) + 1;
    }

    createApple() {
        for(let i = 0; i > snake.length; i++){
            let snakeX = snake[i].x;
            let snakeY = snake[i].y;
            let apple = new Apple();
            if(apple._x === snakeX || apple._y === snakeY || apple._x === snakeX && apple._y === snakeY) {
                apple._x = Math.floor((Math.random() * 30) + 1);
                apple._y = Math.floor((Math.random() * 30) + 1);
            }
        }
    }
}