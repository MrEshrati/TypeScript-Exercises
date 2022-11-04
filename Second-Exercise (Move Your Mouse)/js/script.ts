let box:HTMLElement|null = document.getElementById('mainBox');
let coordinateX:HTMLElement|null = document.getElementById('x');
let coordinateY:HTMLElement|null = document.getElementById('y');

let updateCoordinate = (event) => {

    coordinateX.innerHTML = event.pageX;
    coordinateY.innerHTML = event.pageY;
    box.style.backgroundColor = randomColor();
}

let randomColor = () => {

    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}


box.addEventListener("mousemove", updateCoordinate);
box.addEventListener("mouseenter", updateCoordinate);
box.addEventListener("mouseleave", updateCoordinate);