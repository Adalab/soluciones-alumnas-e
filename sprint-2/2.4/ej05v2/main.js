'use stict';


const price = sinIVA => {
    
    let IVA = sinIVA * 21 / 100;
    let total = sinIVA + IVA;
    return `Precio sin IVA: ${sinIVA}, IVA: ${IVA} y Total: ${total}`;
} 
    
console.log(price(10));
