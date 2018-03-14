class Apple {
    constructor() {
        this._xApple = Math.floor(Math.random() * 30) + 1;
        this._yApple = Math.floor(Math.random() * 30) + 1;
    }

    static createApple() {
        for (let i = 0; i > snake.length; i++) {
            let snakeX = snake[i].x;
            let snakeY = snake[i].y;
            let apple = new Apple();
            if (apple._xApple === snakeX || apple._yApple === snakeY || apple._xApple === snakeX && apple._yApple === snakeY) {
                apple._xApple = Math.floor((Math.random() * 30) + 1);
                apple._yApple = Math.floor((Math.random() * 30) + 1);
            }
        }
    }
}