'use strict';

class Polygon {
    constructor(numberOfSides, base, height) {
        this.numberOfSides = numberOfSides;
        this.base = base;
        this.height = height;
    }
    perimeter() {
        return this.numberOfSides * this.base;
    }
    area () {
        return this.base * this.height;
    }
}

class Square extends Polygon {
    constructor (side){
        super (4, side, side)
    }
}
class Triangle extends Polygon {
    constructor (base, height){
        super (3, base, height)
    }
    area () {
        return super.area () / 2;
    }
}

const cuadrado = new Square (5);
console.log('Cuadrado:');
console.log ('perimetro', cuadrado.perimeter());
console.log ('area', cuadrado.area());

const triangulo = new Triangle (4,3);
console.log('Triángulo:');
console.log ('perimetro', triangulo.perimeter());
console.log ('area', triangulo.area());