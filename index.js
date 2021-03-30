// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

// Speed up the mouse.
robot.setMouseDelay(2);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;

while (true) {
    for (var x = 0; x < width; x++) {
        y = 300;
        robot.moveMouse(x, y);
    }

    for (var x = width; x > 0; x--) {
        y = 300;
        robot.moveMouse(x, y);
    }

}
