function keyboardEvent(key) {
    let keyDown = window.key.keyCode;
    keyDown = key.keyCode;
    switch (keyDown) {
        case 37:
            if (direction != 'right'){
                direction = 'left';
            }
            console.log('left');
            break;
        case 38:
            if (direction != 'left'){
                direction = 'right';
            }
            console.log('right');
            break;
        case 39:
            if (direction != 'down'){
                direction = 'up';
            }
            console.log('up');
            break;
        case 40:
            if (direction != 'up'){
                direction = 'down';
            }
            console.log('down');
            break;
    }
}