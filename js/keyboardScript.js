let apple = new Apple();
let direction = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};

$("body").keydown(function(event) {
    let newDirection = direction[event.keyCode];
    if (newDirection !== undefined) {
        snake.setDirection(newDirection);
    }
});