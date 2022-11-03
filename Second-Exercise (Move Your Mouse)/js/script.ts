let box:HTMLElement|null = document.getElementById('mainBox');
let coordinateX:HTMLElement|null = document.getElementById('x');
let coordinateY:HTMLElement|null = document.getElementById('y');

box.addEventListener("mousemove", updateCoordinate);
box.addEventListener("mouseenter", updateCoordinate);
box.addEventListener("mouseleave", updateCoordinate);