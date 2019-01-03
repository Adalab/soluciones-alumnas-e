"use strict";

class Polygon {
    constructor(numberOfSides, base, height){
        this.numberOfSides = numberOfSides;
        this.base = base;
        this.height = height;
    }

    perimeter(){
        return this.base * this.numberOfSides;
    }

    area() {
        return this.base * this.height;
    }
}

class Square extends Polygon {
    constructor(base){
        super(4, base, base);
        this._side = base; //atributo interno
    }

    get side(){
        return this._side;
    }

    set side(newBase){
        this._side=newBase;
    
    }
}

class Triangle extends Polygon {
    constructor(base, height){
        super(3, base, height);
    }

    area() {
        return super.area()/2;
    }
}

const cuadrado = new Square(4);


const triangulo = new Triangle(4,3);

const cuadradoTwo = new Square(7);

cuadrado.side =8;
console.log(cuadrado._side)

