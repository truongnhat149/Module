function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

// Vẽ 1 hình tròn kích thước cố định

// ;(function createCircle() {
//     var ctx = document.getElementById('myCanvas').getContext('2d');
//     var circle = new Circle(500, 200, 80);
//     var color = getRandomColor()
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.fillStyle = color;
//     ctx.fill();
// })();

// vẽ đường tròn bán kính random;
// function getRandomHex() {
//     return Math.floor(Math.random() * 255);
// }

// function getRandomColor() {
//     var red = getRandomHex();
//     var green = getRandomHex();
//     var blue = getRandomHex();
//     return `rgb(${red},${green},${blue})`
// }

// createCircle();
;(function createCircle() {
     var ctx = document.getElementById('myCanvas').getContext('2d');
     var radius = Math.floor(Math.random() * 80);
     var color = getRandomColor();
     var circle = new Circle(300, 300, radius);
     ctx.beginPath();
     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
     ctx.fillStyle = color;
     ctx.fill();
 })();


function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex;
        return "rbg(" + red + "," + blue + "," + green + ")";
}

// (function createCircle() {
//     var ctx = document.getElementById('myCanvas').getContext('2d');
//     var radius = Math.floor(Math.random() * 80);
//     var color = getRandomColor();
//     var circle = new Circle(500, 500, radius);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.fillStyle = color;
//     ctx.fill();
// })();

// function Circle(x, y, radius) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
// }

// function getRandomHex(){
//     return Math.floor(Math.random() * 255);
// }
//  function getRandomColor() {
//      var red = getRandomHex();
//      var green = getRandomHex();
//      var blue = getRandomHex();
//      return "rgb(" + red + "," + blue + "," + green + ")";
//  }

// function createCircle() {
//     var ctx = document.getElementById('myCanvas').getContext('2d');
//     var radius = Math.floor(Math.random() * 80);
//     var color = getRandomColor();
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var circle = new Circle(x, y, radius);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.fillStyle = color;
//     ctx.fill();

// }


// function Circle(x, y, radius) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
// }

// function getRandomHex() {
//     return Math.floor(Math.random() * 255);
// }

// function getRandomColor() {
//     var red = getRandomHex();
//     var green = getRandomHex();
//     var blue = getRandomHex();
//     return "rbg(" + red + ',' + blue + ',' + green + ")";
// }

// function createCircle() {
//     var ctx = document.getElementById('myCanvas').getContext('2d');
//     var radius = Math.floor(Math.random() * 80);
//     var color = getRandomColor();
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var circle = new Circle(x, y, radius);
//     ctx.beginPath();
//     ctx.arc()
// }