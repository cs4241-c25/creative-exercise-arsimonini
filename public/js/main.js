// FRONT-END (CLIENT) JAVASCRIPT HERE
//let index = -1;
//let currAllData = [];

//Gets the canvas
//const canvas = document.getElementById("myCanvas");

window.onload = function() {
    drawRect(100, 100, 25, 50, "green")
    drawLine(250, 210, 429, 180)
    drawCircle(400, 500, 40, 0, 2)
    advDrawLine(10, 600, 800, 600, 20, "yellow", true)
    advDrawRect(600, 300, 100, 100, "orange", "blue", 7)

    advDrawRect(710, 300, 100, 100, "rgb(0 255 0 / 50%)", "rgb(0 0 255 / 50%)", 7)

    drawTriangle(50, 100, 260, 100, 260, 260, "red")

    drawRect(1000, 300, 300, 300, "purple");
    clearRectangle(1200, 500, 50, 80)

    gradiantRect(600, 100, 400, 100, 600, 200, 1000, 200, "darkblue", "lightblue");
    gradiantText(400, 75, "red", "purple", "blue", "This is my shape test page")

    gradiantText(750, 780, "orange", "magenta", "green", "Much WoW!")

    rotatedRect(200, 200, 200, 200, 25, "magenta");
}
function drawRect(x, y, width, height, color) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawLine(startX, startY, endX, endY) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

function drawCircle(x, y, radius, startAngle, endAngle) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle * Math.PI);
    ctx.stroke();
}

function advDrawLine(startX, startY, endX, endY, lWidth, color, cap) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");


    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.lineWidth = lWidth;
    ctx.strokeStyle = color;
    if(cap === true) {
        ctx.lineCap = "round";
    }
    ctx.stroke();
}

function advDrawRect(x, y, width, height, fillCol, lineCol, lineWidth) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = fillCol;
    ctx.fillRect(x, y, width, height);

    ctx.strokeStyle = lineCol;
    ctx.lineWidth =lineWidth;
    ctx.strokeRect(x, y, width, height);
}

function drawTriangle(startX, startY, secPointX, secPointY, lastPointX, lastPointY, lineCol) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(secPointX,secPointY);
    ctx.lineTo(lastPointX,lastPointY);
    ctx.lineTo(startX,startY);

    ctx.strokeStyle = lineCol;
    ctx.stroke();
}

function clearRectangle(x, y, width, height) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(x, y, width, height);
}

function gradiantRect(x,y,width,height,gradStartX, gradStartY, gradEndX, gradEndY, col1, col2) {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");

// Create linear gradient
    const grad=ctx.createLinearGradient(gradStartX,gradStartY, gradEndX,gradEndY);
    grad.addColorStop(0, col1);
    grad.addColorStop(1, col2);

// Fill rectangle with gradient
    ctx.fillStyle = grad;
    ctx.fillRect(x,y, width,height);
}

function gradiantText(x, y, col1, col2, col3, text) {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");

// Create linear gradient
    const grad=ctx.createLinearGradient(x,y,x+500,y+50);
    grad.addColorStop(0, col1);
    grad.addColorStop(0.5, col2);
    grad.addColorStop(1, col3);

// Fill text with gradient
    ctx.font = "50px Arial";
    ctx.fillStyle = grad;
    ctx.fillText(text,x,y);
}

function rotatedRect(x, y, width, height, rotate, color) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.rotate((Math.PI/180)*rotate);

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}
