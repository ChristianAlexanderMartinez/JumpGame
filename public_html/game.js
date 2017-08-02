/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var screen = new Object();

var x = 0;
var y = 0;

var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;

requestAnimationFrame = 
        window.requestAnimationFrame
||      window.webkitRequestAnimationFrame
||      window.mozRequestAnimationFrame
||      false;

last = Date.now();
current = last;
elapsed = 0;

function keyDown(e) {
    switch (e.keyCode) {
        case 65:
            leftPressed = true;
            break;
        case 68:
            rightPressed = true;
            break;
        case 83:
            downPressed = true;
            break;
        case 87:
            upPressed = true;
            break;
    }
}

function keyUp(e) {
    //65a 68d 83s 87w
    
    switch (e.keyCode) {
        case 65:
            leftPressed = false;
            break;
        case 68:
            rightPressed = false;
            break;
        case 83:
            downPressed = false;
            break;
        case 87:
            upPressed = false;
            break;
    }
}

function init() {
    screen.canvas = document.getElementById("screen");
    //screen.canvas.onblur = onFocusLost;
    //screen.canvas.focus();
    screen.context = screen.canvas.getContext("2d");
    screen.width = screen.canvas.getAttribute("width");
    screen.height = screen.canvas.getAttribute("height");
    screen.fps = 30.0;
    screen.period = 1000.0 / screen.fps;
    
    window.onkeydown = keyDown;
    window.onkeyup = keyUp;
   // window.onkeypress = Input.onKeyPress;
   // window.addEventListener("click", Input.onMouseClick);
  //  window.addEventListener("mousemove", Input.onMouseMove);
    //window.addEventListener("mousedown", Input.onMouseDown);
  //  window.addEventListener("mouseup", Input.onMouseUp);
    
    initGame();
    
    gameLoop();
}

function initGame() {

}

function gameLoop() {
    current = Date.now();
    elapsed = current - last;
    last = current;
    
    //UPDATE 
    
    if (leftPressed) {
        x -= 5;
    }
    
    if  (rightPressed) {
        x += 5;
    }
    
    if (upPressed) {
        y -= 5;
    }
    
    if (downPressed) {
        y += 5;
    }
    
    //RENDER
    screen.context.fillStyle = "#FFFFFF";
    screen.context.fillRect(0, 0, screen.width, screen.height);
    
    screen.context.fillStyle = "#00FF00";
    screen.context.fillRect(x, y, 100, 100);
    
    requestAnimationFrame(gameLoop);
}