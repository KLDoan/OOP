class Rectangle {
    constructor(length, width, RectCanvas) {
        this.length = length //int 
        this.width = width//int 
        this.RectCanvas = RectCanvas
    }
    getInt() {
        return this.length, this.width;
    }
    getArea() {
        return this.length * this.width;
    }
    getPerimeter() {
        return (this.length + this.width) * 2;
    }
    //canvas draw a rectangle
    getRectCanvas() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext('2d');
        ctx.beginPath();
        ctx.rect(20, 20, 50, 50);
        ctx.stroke();
    }

}
let l = +prompt("hay nhap chieu dai", "50");
let w = +prompt("hay nhap chieu rong", "50");
const rectangle = new Rectangle(l, w);
let int = rectangle.getInt();
let area = rectangle.getArea();
let perimeter = rectangle.getPerimeter();
let RectCanvas = rectangle.getRectCanvas();
console.log("length and width: " + int + ',' + int + "; area: " + area + "; perimeter: " + perimeter);
alert("length and width: " + int + ',' + int + "; area: " + area + "; perimeter: " + perimeter);