
    let Rectangle = function(height, width) {
        this.height = height;
        this.width = width;
        
         this.getArea = function() {
             return this.height * this.width;
         }
    
         this.getPerimeter = function() {
             return (this.height + this.width) * 2;
         }
         this.drawRec = function() {
             var ctx = document.getElementById('myCanvas').getContext('2d');
             ctx.beginPath();
             ctx.rect(20, 20, this.height, this.width);
             ctx.stroke();
         }
    }

function runRectangle() {
    let height = Number(document.getElementById('lengthRec').value);
    let width = Number(document.getElementById('widthRec').value);
    if (height && width) {
        let rectangle = new Rectangle(height, width);
        rectangle.drawRec();
        are = rectangle.getArea();
        perimeter = rectangle.getPerimeter();

        document.getElementById('showArea').innerHTML = `rectangular are ${are}`;
        document.getElementById('showPerimeterOfARectangle').innerHTML = `Perimeter of a rectangle  ${perimeter}`;
        
    }
}

