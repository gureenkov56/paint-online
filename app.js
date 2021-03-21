// получаем canvas
const canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

// задаем толщину и цвет кисти
ctx.lineWidth = 2.5;
ctx.strokeStyle = "black";


// задаем размеры canvas
canvas.height = 466;
canvas.width = 466;

let isPaintDown = false;

// отслеживаем координаты кисти и рисуем
function mouseXY(event){
    let x = event.offsetX;
    let y = event.offsetY;
    if(!isPaintDown){
        ctx.beginPath();     // Отслеживаем позицию курсора
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);    // Рисуем линии
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
    canvas.addEventListener('mousemove', mouseXY);   // отслеживает позицию
    canvas.addEventListener('mousedown', mouseDown); // отслеживает опускание кисти
    canvas.addEventListener('mouseup', mouseUp);     // отслеживает поднятие кисти
    canvas.addEventListener('mouseout', mouseUp);    // отслеживает выход за пределы
}

// меняем цвет

function changeColor(event){
    ctx.strokeStyle = event.target.style.backgroundColor;
}

let colors = document.getElementsByClassName('color');
Array.from(colors).forEach(color => color.addEventListener('click', changeColor));

// изменяем размер кисти

function inputRange(event){
    ctx.lineWidth = event.target.value;
}

let range = document.getElementById('wPen');
if (range){
    range.addEventListener('input', inputRange);
}

// переключатель заливки

const mode = document.getElementById('mode');
let filling = false;
function changeMode(){
    if (filling) {                     // Проверка режима
        filling = false; 
        mode.innerHTML = "Заливка";   // Включиает режим ручки
    } else {
        filling = true;               // Включиает режим заливки
        mode.innerHTML = "Ручка";
    }
}

if (mode){
    mode.addEventListener('click', changeMode);
}

// режим заливки

// ctx.fillStyle = "green";
// ctx.fillRect(0, 0, 466, 466);

