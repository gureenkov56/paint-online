// получаем canvas
const canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

// задаем толщину и цвет кисти
ctx.lineWidth = 2.5;
ctx.strokeStyle = "black";
ctx.fillStyle = "black";

// задаем размеры canvas
canvas.height = 466;
canvas.width = 466;

// создаем белый фон
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 466, 466);

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

function fillingMode(){
    if (filling){
        ctx.fillRect(0, 0, 466, 466);
    }
}

if (canvas){
    canvas.addEventListener('mousemove', mouseXY);   // отслеживает позицию
    canvas.addEventListener('mousedown', mouseDown); // отслеживает опускание кисти
    canvas.addEventListener('mouseup', mouseUp);     // отслеживает поднятие кисти
    canvas.addEventListener('mouseout', mouseUp);    // отслеживает выход за пределы
    canvas.addEventListener('click', fillingMode);       // заливка при клике
}

// меняем цвет

function changeColor(event){
    ctx.strokeStyle = event.target.style.backgroundColor; // цвет для ручки
    ctx.fillStyle = event.target.style.backgroundColor;   // цвет для заливки
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

// сохранение фото

function savePick(){
    let image = canvas.toDataURL('image/jpeg');              // создает ссылку на картинку
    let linkToSave = document.createElement('a');            // создает элемент а
    linkToSave.href = image;
    linkToSave.download = 'ExportOnlinePaint';
    console.log(linkToSave);
    linkToSave.click();
}

let saveBtn = document.getElementById('save');
saveBtn.addEventListener('click', savePick);


// link.setAttribute('download', 'MintyPaper.png');
// link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
// link.click();