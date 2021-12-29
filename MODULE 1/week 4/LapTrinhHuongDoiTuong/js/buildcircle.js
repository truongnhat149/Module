let Circle = function(radius) {
    this.radius = radius;
};

this.getRadius = function getRadius() {
    return radius;
}

this.getArea = function getArea() {
    return Math.PI * radius * radius;
}

let circle = new Circle(2);

let radius = circle.getRadius();
let area = circle.getArea()

alert("radius: " + radius + "; area: " + area);