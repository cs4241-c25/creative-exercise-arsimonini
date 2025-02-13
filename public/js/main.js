// FRONT-END (CLIENT) JAVASCRIPT HERE
//let index = -1;
//let currAllData = [];

//Gets the canvas
//const canvas = document.getElementById("myCanvas");

window.onload = function() {
    drawRect(100, 100, 25, 50, "green")
    drawLine(250, 210, 260, 180)
    drawCircle(400, 500, 40, 0, 2)
    advDrawLine(10, 600, 800, 600, 20, "yellow", true)
    advDrawRect(600, 300, 100, 100, "orange", "blue", 7)

    advDrawRect(710, 300, 100, 100, "rgb(0 255 0 / 50%)", "rgb(0 0 255 / 50%)", 7)
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

