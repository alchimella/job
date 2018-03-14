class Apple {
    constructor() {
        this._xApple = Math.floor(Math.random() * widthMap);
        this._yApple = Math.floor(Math.random() * heightMap);
    }

    createApple() {
        for(let i = 0; i > snake.length; i++) {
            let snakeX = snake[i].x;
            let snakeY = snake[i].y;
            let apple = new Apple();
            if(apple._xApple === snakeX || apple._yApple === snakeY || apple._xApple === snakeX && apple._yApple === snakeY) {
                apple._xApple = Math.floor((Math.random() * widthMap));
                apple._yApple = Math.floor((Math.random() * heightMap));
            }
        }
    }
}