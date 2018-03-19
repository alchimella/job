let apple = new Apple();
let direction = {
    65: "left",
    87: "up",
    68: "right",
    83: "down"
};

$("body").keydown(function(event) {
    let newDirection = direction[event.keyCode];
    if (newDirection !== undefined) {
        snake.setDirection(newDirection);
    }
});