let Car = function (id, maxwidth, maxheight) {
    this.score = 0;
    this.life = 3;
    this.top = 50;
    this.left = 50;
    this.id = id;
    this.orientation = "0deg";
    this.maxwidth = maxwidth;
    this.maxheight = maxheight;
    this.moveUp = function (step) {
        if (this.top > 60) {
            this.top -= step;
        }
        this.orientation = "-90deg";
    }
    this.moveDown = function (step) {
        if (this.top < this.maxheight) {
            this.top += step;
        }
        this.orientation = "90deg";
    }
    this.moveLeft = function (step) {
        if (this.left > 60) {
            this.left -= step;
        }
        this.orientation = "180deg";
    }
    this.moveRight = function (step) {
        if (this.left < this.maxwidth) {
            this.left += step;
        }
        this.orientation = "0deg";
    }
    this.hit = function () {
        this.life -= 1;
    }
    this.death = function () {
        if (this.life == 0) {
            alert("You're death!");
        }
    }
    this.drawCar = function () {
        c = $(this.id);
        c.css("top", this.top + "px");
        c.css("left", this.left + "px");
        c.css("transform", "rotate(" + this.orientation + ")");
    }
}

let FruitAndBomb = function (id, name, top, left) {
    this.exist = true;
    this.id = id;
    this.name = name;
    this.top = top;
    this.left = left;
    this.image = function () {
        if (this.name == "bomb") {
            return "bomb.png";
        }
        if (this.name == "fruit") {
            return "fruit.png";
        }
    }
    this.collision = function () {
        this.exist = false;
        this.delete();
    }
    this.delete = function () {
        c = $(this.id);
        c.css("display", "none");
    }
}

function drawFruitandBomb(name) {
    result = "";
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let top = Math.floor(Math.random() * (MAXHEIGHT-90)) + 50;
        let left = Math.floor(Math.random() * (MAXWIDTH-90)) + 50;
        let obstacle = new FruitAndBomb(name + i, name, top, left);
        result += "<img src='" + obstacle.image() + "' id='" + name + "-" + i + "' class=" + name + ">";
        arr.push(obstacle);
    }
    $("#Field").append(result);
    for (let i = 0; i < 10; i++) {
        $("#" + name + "-" + i).css("top", arr[i].top + "px");
        $("#" + name + "-" + i).css("left", arr[i].left + "px");
    }
}

function Collision(name) {
    for (let i = 0; i < 10; i++) {
        let id = "#" + name + "-" + i;
        if ($(id).length) {
            if (is_colliding($(id), $("#Car"))) {
                if (name=="bomb") {
                    $(id).prop("src","explosion.png");
                    alert("You hitted a bomb");
                }
                $(id).remove();
                return true;
            }
        }
    }
    return false;
}

function displayScore(car) {
    $("#score").text("Score: "+car.score);
}

function displayLife(car) {
    $("#life").text("Life: "+car.life);
}

const MAXWIDTH = 1100;
const MAXHEIGHT = 600;
let car = new Car("#Car", MAXWIDTH, MAXHEIGHT);
drawFruitandBomb("fruit");
drawFruitandBomb("bomb");
//move car
$(document).keydown(function (event) {
    let step = 40;
    if (event.which == 40) {
        car.moveDown(step);
        car.drawCar();
    }
    if (event.which == 38) {
        car.moveUp(step);
        car.drawCar();
    }
    if (event.which == 37) {
        car.moveLeft(step);
        car.drawCar();
    }
    if (event.which == 39) {
        car.moveRight(step);
        car.drawCar();
    }
    if (Collision("fruit")) {
        car.score += 1;
        displayScore(car);
        if (car.score == 9) {
            alert('You won!')
            location.reload();
        }
    }
    if (Collision("bomb")) {
        car.life -= 1;
        displayLife(car);
        if (car.death()) {
            alert("Game over!");
            location.reload();
        }
    }
})