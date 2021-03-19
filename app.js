const canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

ctx.lineWidth = 2.5;
ctx.strokeStyle = "black";

canvas.height = 466;
canvas.width = 466;


let isPaintDown = false;

function mouseXY(event){
    let x = event.offsetX;
    let y = event.offsetY;
    if(!isPaintDown){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    CanvasRenderingContext2D.moveTo(x, y);
}

function mouseDown(event){
    isPaintDown = true;
}

function mouseUp(event){
    isPaintDown = false;
}



if (canvas){
    canvas.addEventListener('mousemove', mouseXY);
    canvas.addEventListener('mousedown', mouseDown);
    canvas.addEventListener('mouseup', mouseUp);
    canvas.addEventListener('mouseout', mouseUp);
}