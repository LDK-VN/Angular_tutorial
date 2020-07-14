var a;
var b;
var c;
var d;
var e = ['a', 'b', 'c']; //number[], boolean[], any[]
var f; // ít khi dùng
var g; // ít khi dùng
var h; // using function
//VARIABLE
// enum Color {
//     Red = "red",
//     Green = "green",
//     Blue = "blue"
// }
// let red = Color.Red;
// console.log(red);
// TYPEASSERTION
var aa;
var bb;
// Cast
bb;
//or
bb;
var drawPoint = function (x, y) {
    console.log("Draw a point at X: " + x + " and Y: " + y);
    // ...
};
var drawPointTwo = function (point) {
    console.log("Draw a point two at X: " + point.x + " and Y: " + point.y);
    // ...
};
var drawPointThree = function (point) {
    console.log("Draw a point three at X: " + point.x + " and Y: " + point.y);
    // ...
};
var drawPointFour = function (point) {
    console.log("Draw a point four at X: " + point.x + " and Y: " + point.y);
    // ...
};
var movePoint = function (pointA, pointB) { };
drawPointTwo({
    name: 1,
    y: 2,
});
drawPointThree({
    x: 1,
    y: 2
});
// Cohesion
var PointTwo = /** @class */ (function () {
    function PointTwo(x, y) {
        this.x = x;
        this.y = y;
    }
    PointTwo.prototype.drawPointFive = function () {
        console.log("Draw a point five at X: " + this.x + " and Y: " + this.y);
    };
    return PointTwo;
}());
var pointFive = new PointTwo(1, 2);
pointFive.x = 2;
pointFive.y = 4;
pointFive.drawPointFive();
//Access Mdifiers: Public, Private, Protected
var PointThree = /** @class */ (function () {
    function PointThree(x, y) {
        this.x = x;
        this.y = y;
    }
    PointThree.prototype.drawPointFive = function () {
        console.log("Draw a point six at X: " + this.x + " and Y: " + this.y);
    };
    return PointThree;
}());
var pointSix = new PointThree(11, 22);
pointSix.drawPointFive();
// Getters and Setters
var PointFour = /** @class */ (function () {
    function PointFour(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    PointFour.prototype.drawPointFive = function () {
        console.log("Draw a point six at X: " + this._x + " and Y: " + this._y);
    };
    Object.defineProperty(PointFour.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Vlaue cannot be less than 0");
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return PointFour;
}());
var pointSevent = new PointFour(11, 22);
console.log("X is " + pointSevent.x);
pointSevent.x = 10;
pointSevent.drawPointFive();
