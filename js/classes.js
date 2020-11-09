class Torta {
    constructor (nombre, precio, porciones){
    
            this.nombre = nombre;
            this.precio = precio;
            this.porciones = porciones;
            
    }
    
}


class Cookies extends Torta{
    constructor(nombre, precio, porciones, sabor){
        super(nombre, precio, porciones);
        this.sabor = sabor;
    }
    addSabor(newSabor = []){
        this.sabor.push(newSabor)
    }
}


class Carrito{
    constructor(){
        this.producto = [];
    }    
    addProducto(cantidad, precio){
        this.producto.push(...Array(cantidad).fill(precio));
    }
    showProducto(){
        console.log(this.producto);
    }

    calcTotal(){
        return this.producto
        .map( precio => precio)
        .reduce((acum, precio) => acum + precio , 0);
    }
    printBoleta(){
        console.log('Total de tu compra $ ' + this.calcTotal())
    }
}
const torta1 = new Torta ('lemonpie', 500, 16);
const cookie1 =new Cookies ('luna', 50 , 10, ['naranja', 'limon'])

console.log(torta1.nombre);
console.log(torta1.precio);
console.log(torta1.porciones);

console.log(cookie1.nombre);
console.log(cookie1.precio);
console.log(cookie1.porciones);
console.log(cookie1.sabor);

cookie1.addSabor('chocolate')
console.log(cookie1.nombre);
console.log(cookie1.precio);
console.log(cookie1.porciones);
console.log(cookie1.sabor);

const carrito = new Carrito();
carrito.addProducto(4, cookie1.precio);
carrito.addProducto(1, torta1.precio);
carrito.showProducto();
carrito.printBoleta();