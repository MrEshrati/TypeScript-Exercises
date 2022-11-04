var box = document.getElementById('mainBox');
var coordinateX = document.getElementById('x');
var coordinateY = document.getElementById('y');
var updateCoordinate = function (event) {
    coordinateX.innerHTML = event.pageX;
    coordinateY.innerHTML = event.pageY;
    box.style.backgroundColor = randomColor();
};
var randomColor = function () {
    var r = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
};
box.addEventListener("mousemove", updateCoordinate);
box.addEventListener("mouseenter", updateCoordinate);
box.addEventListener("mouseleave", updateCoordinate);
