'use strict';
class Polygon {
    constructor(numberOfSides, base, height) {
        this.numberOfSides = numberOfSides;
        this.base = base;
        this.height = height;
    }
    perimeter(){
        return this.numberOfSides * this.base;
    }
    area(){
        return this.base * this.height;
    }
}

class Square extends Polygon {
    constructor(side){
        super(4, side, side)
        this.side = side;
    }
    get sides(){
        return this.side;
    }
    set sides(newSide){
        this.side = newSide;
        console.log(this.side);
        super.base = this.side;
        super.height = this.side;
    }
}

const square1 = new Square(7);
const area1 = square1.area();
console.log(area1);
square1.sides = 47;
const area2 = square1.area();
console.log(area2);