let a: string;
let b: number;
let c: boolean;
let d: any;
let e: string[] = ['a', 'b', 'c']; //number[], boolean[], any[]
let f: null; // ít khi dùng
let g: undefined; // ít khi dùng
let h: void; // using function

//VARIABLE

// enum Color {
//     Red = "red",
//     Green = "green",
//     Blue = "blue"
// }

// let red = Color.Red;
// console.log(red);

// TYPEASSERTION

let aa: string[];
let bb;

// Cast

(<string[]>bb) ;
//or
(bb as string[]);

// Interface

interface Point {
    x: number,
    y: number
}

let drawPoint = (x, y) => {
    console.log(`Draw a point at X: ${x} and Y: ${y}`);
    // ...
}

let drawPointTwo = (point) => {
    console.log(`Draw a point two at X: ${point.x} and Y: ${point.y}`);
    // ...
}

let drawPointThree = (point: { x: number, y: number }) => { // Inline Annotation
    console.log(`Draw a point three at X: ${point.x} and Y: ${point.y}`);
    // ...
}

let drawPointFour = (point: Point) => {
    console.log(`Draw a point four at X: ${point.x} and Y: ${point.y}`);
    // ...
}

let movePoint = (pointA: Point, pointB: Point) => { }

drawPointTwo({
    name: 1,
    y: 2,
});

drawPointThree({
    x: 1,
    y: 2
})

// Cohesion

class PointTwo {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    drawPointFive() {
        console.log(`Draw a point five at X: ${this.x} and Y: ${this.y}`);
    }
}

let pointFive = new PointTwo(1, 2);
pointFive.x = 2;
pointFive.y = 4;
pointFive.drawPointFive();


//Access Mdifiers: Public, Private, Protected
class PointThree {
    constructor(private x: number, private y: number) {}

    drawPointFive() {
        console.log(`Draw a point six at X: ${this.x} and Y: ${this.y}`);
    }
}

let pointSix = new PointThree(11, 22);
pointSix.drawPointFive();


// Getters and Setters
class PointFour {
    constructor(private _x: number, private _y: number) {}

    drawPointFive() {
        console.log(`Draw a point six at X: ${this._x} and Y: ${this._y}`);
    }

    get x() {
        return this._x;
    }

    set x(value: number) {
        if(value < 0) {
            throw new Error("Vlaue cannot be less than 0");
        }

        this._x = value;
    }
}

let pointSevent = new PointFour(11, 22);
console.log(`X is ${pointSevent.x}`);
pointSevent.x = 10;

pointSevent.drawPointFive();