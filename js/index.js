class Producto{

    constructor(codigo, nombre, marca, precio){
    
        this.codigo = codigo;
        
        this.nombre = nombre;
        
        this.marca = marca;
        
        this.precio = precio;

    }

}

const productos = [];

productos.push(new Producto(1, "SMART TV" ,"LG", 200000));

productos.push(new Producto(2, "SMART TV", "PHILLIPS", 240000));

productos.push(new Producto(3, "SMART TV", "SAMSUNG", 75000));

productos.push(new Producto(4, "CONSOLA", "SONY", 219000));

productos.push(new Producto(5, "CELULAR", "SAMSUNG", 89000));

productos.push(new Producto(6, "CELULAR", "APPLE", 250000));

productos.push(new Producto(7, "CELULAR", "XIAOMI", 35000));

productos.push(new Producto(8, "CELULAR", "LG", 54000));

productos.push(new Producto(9, "CELULAR", "MOTOROLA", 67000));

productos.push(new Producto(10, "TABLET", "APPLE", 149000));

for (const producto of productos){
    
    let articulo = document.createElement("div");

    articulo.innerHTML = `<h2>Producto ${producto.codigo}: ${producto.nombre} ${producto.marca} Precio: $${producto.precio}</h2>`;

    document.body.appendChild(articulo);

}

let parrafo = document.getElementById("articulo");

parrafo.innerHTML = "<h4>Las cuotas permitidas para Smart tv's son: 3, 6, 12, 18 y 24, para celulares 3, 6, 12 y 18 y para el resto de productos 3, 6 y 12.</h4>";

function tipoProducto(producto, numeroCuotas){

    if(producto.nombre=="SMART TV"){
        
        switch (numeroCuotas) {

            case 1:

                return 0;
                
            case 3:

                return 0; 

            case 6:    
                
                return 5;
            
            case 12:
            
                return 10;
            
            case 18:
        
                return 15;
            
            case 24:
        
                return 25;
            
            default:
        
                return -1;
        
        }

    }else if(producto.nombre=="CELULAR"){
        
        switch (numeroCuotas) {
            case 1:

                return 0;
                
            case 3:

                return 1;

            case 6:
                
                return 2;

            case 12:

                return 4;

            case 18:

                return 8;

            default:

                return -1

        }

    }else{
        
        switch (numeroCuotas) {

            case 1:

                return 0;

            case 3:

                return 10;

            case 6:

                return 15;

            case 12:

                return 20;

            default:

                return -1;
            
        }

    }

}



function sumarInteres(producto, numeroCuotas){

    let interesTotal=tipoProducto(producto, numeroCuotas);

    if (numeroCuotas!=1 && interesTotal!=-1){
        
        if(producto.marca=="LG"){

            interesTotal+=5;

        }else if(producto.marca=="SAMSUNG"){

            interesTotal+=7;

        }else if(producto.marca=="APPLE"){

            interesTotal+=7;

        }
        
        if (producto.precio>100000){    

            interesTotal+=10

        }

    }

    return interesTotal;

}

function calcularInteres(numeroProducto, numeroCuotas){

    let producto = productos.find(objeto => objeto.codigo == numeroProducto);
    
    if(numeroProducto>=1 && numeroProducto<=10)

        return sumarInteres(producto, numeroCuotas);
    
    else

        return -2;

}

function calcularCuota(numeroProducto, numeroCuotas, interes){

    let CuotaHTML = document.createElement("div");

    if (interes != -1 && interes != -2){

        let producto = productos.find(objeto => objeto.codigo == numeroProducto);

        let valorCuota = (producto.precio / numeroCuotas) + ((producto.precio * interes) / 100);

        CuotaHTML.innerHTML = `<h3>El valor de la cuota del producto ${producto.nombre} ${producto.marca} es ${valorCuota}.</h3>`;

    } else if (interes == -1){

        CuotaHTML.innerHTML = "<h3>No esta disponible la cantidad de cuotas seleccionadas para este producto</h3>";
        
    } else {

        CuotaHTML.innerHTML = "<h3>El producto no esta disponible.</h3>";

    }

    document.body.append(CuotaHTML);

}

let numeroProducto = parseInt(prompt("Ingrese el numero del producto"));

let numeroCuotas = parseInt(prompt("Ingrese la cantidad de cuotas"));

let interes = calcularInteres(numeroProducto, numeroCuotas);

calcularCuota(numeroProducto, numeroCuotas, interes);