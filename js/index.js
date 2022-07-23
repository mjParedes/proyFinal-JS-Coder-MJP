        //ALGORITMO SIMULADOR DE TAREAS Y FUNCIONES

// - Validar mayoria de edad 
// - Pedir nombre y apellido de usuario
// - Pedir DNI de usuario
// - Elegir productos (opciones)
// - Seleccionar cantidad de productos comprados
// - Calcular y mostrar importe total de la compra
// - Consultar y calcular monto en cuotas s/interes
// - Mostrar lista de redes sociales donde contactarse

let edad;
let nombreCompleto;
let dni;
let producto;
let total = 0;
let cuotas; 

function validarEdad() {
  edad = parseInt(prompt("Ingrese su edad"));
  while (edad < 18) {
    alert("Eres menor de edad no puedes ingresar al sitio");
    edad = parseInt(prompt("Ingrese su edad"));
  }
  alert("Bienvenido a PET CARE");
}

function nombreUser() {
  nombreCompleto = prompt("Ingrese su nombre completo");
  while (nombreCompleto === "" || !isNaN(nombreCompleto)) {
    nombre = prompt("Ingrese su nombre nuevamente");
  }
}

function pedirDNI() {
  dni = prompt("ingrese su DNI");
  while (isNaN(parseInt(dni)) || dni.length < 7 || dni.length > 8) {
    dni = prompt(
      "ingrese su DNI. Recuerde que debe ser un número de 7 u 8 caracteres"
    );
  }
  return dni;
}

const elegirProducto = () => {
  producto = prompt(
    "Que producto desea adquirir: collar, correa, alimento balanceado, juguete"
  );
  let precio;
  switch (producto) {
    case "collar":
      precio = 650;
      break;
    case "correa":
      precio = 540;
      break;
    case "alimento balanceado":
      precio = 1000;
      break;
    case "juguete":
      precio = 320;
      break;
    default:
      alert("Ingrese un producto de la lista");
      producto = prompt(
        "Que producto desea adquirir: collar, correa, alimento balanceado, juguete"
      );
      break;
  }
  return precio;
};

const elegirCantidad = () => {
  let cantidad = parseInt(prompt("Ingrese cantidad deseada"));
  while (isNaN(cantidad) || cantidad === "") {
    cantidad = parseInt(prompt("Ingrese cantidad deseada"));
  }
  return cantidad;
};

const calculoTotal = (precioProducto, cantidadProducto) => {
  total += precioProducto * cantidadProducto;
};
const pagarCuotas = () => {
  let formaDePago = prompt("Abonaras en cuotas: SI/NO");

  if (formaDePago === "si" || formaDePago === "SI") {
    cuotas = parseInt(prompt("Ingresa cantidad de cuotas: 3/6/12"));
    switch (cuotas) {
      case 3:
        montoCuotas = console.log(
          "Abonaras 3 cuotas de " + total / 3 + " pesos"
        );
        break;
      case 6:
        montoCuotas = console.log(
          "Abonaras 6 cuotas de " + total / 6 + " pesos"
        );
        break;
      case 12:
        montoCuotas = console.log(
          "Abonaras 12 cuotas de " + total / 12 + " pesos"
        );
        break;
      default:
        montoCuotas = parseInt(prompt("Ingresa cantidad de cuotas : 3/6/12"));
        break;
    }
    return montoCuotas;
  } else if (formaDePago === "no" || formaDePago === "NO") {
    console.log("Gracias por su compra");
  }
};

const inicio = () => {
  validarEdad();
  nombreUser();
  pedirDNI();
  calculoTotal(elegirProducto(), elegirCantidad());
  pagarCuotas();
};

        /* ALGORITMO INCORPORA ARRAY, CLASES, OBJETOS */ 
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  mostrarProducto() {
    return this.nombre;
  }
}
const producto1 = new Producto("Cadena anti-ahorque", 4020);
const producto2 = new Producto("Collar cuero sintetico", 3210);
const producto3 = new Producto("Buzo polar con fantasia", 2390);
const producto4 = new Producto("Cama extra grande", 7500);

class DetallePedido {
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
  calcSubtotal() {
    let subtotal = this.producto.precio * this.cantidad;
    return subtotal;
  }
  mostrarDetalle() {
    return (
      " • " +
      this.cantidad +
      " x " +
      this.producto.mostrarProducto() +
      " ($" +
      this.calcSubtotal() +
      ")"
    );
  }
}
const detallePedido1 = new DetallePedido(producto1, 2);
const detallePedido2 = new DetallePedido(producto2, 3);
const detallePedido3 = new DetallePedido(producto3, 1);
const detallePedido4 = new DetallePedido(producto4, 1);

class Pedido {
  constructor(fecha, detalles) {
    this.fecha = fecha;
    this.detalles = detalles;
  }
  calcTotal() {
    let total = 0;
    for (const dt of this.detalles) {
      total = total + dt.calcSubtotal();
    }
    return total;
  }
  mostrarPedido() {
    let txt = "PEDIDO DE LA JORNADA: " + this.fecha + "\n";
    for (const dt of this.detalles) {
      txt += dt.mostrarDetalle() + "\n";
    }
    txt += "---- IMPORTE TOTAL: $" + this.calcTotal() + " ----";
    return txt;
  }
}

const arrayPedidos = [];
arrayPedidos.push(detallePedido1);
arrayPedidos.push(detallePedido2);
arrayPedidos.push(detallePedido3);
arrayPedidos.push(detallePedido4);

const pedido1 = new Pedido(new Date(), arrayPedidos);


const iniciarPedido = () => {
  console.log(pedido1.mostrarPedido());
};

const clientes = [
  {
    nombre: "Tomas",
    apellido: "Galindo",
    edad: 32,
    direccion: "Moriatti 3411",
    deudas: true,
  },
  {
    nombre: "Santino",
    apellido: "Bellotti",
    edad: 31,
    direccion: "Rossetti 980",
    deudas: false,
  },
  {
    nombre: "Ariadna",
    apellido: "Greco",
    edad: 29,
    direccion: "Peron 767",
    deudas: true,
  },
  {
    nombre: "Benicio",
    apellido: "Juarez",
    edad: 40,
    direccion: "Italia 3221",
    deudas: false,
  },
  {
    nombre: "Dario",
    apellido: "Gronstein",
    edad: 45,
    direccion: "Thames 4534",
    deudas: false,
  },
  {
    nombre: "Micaela",
    apellido: "Aguero",
    edad: 25,
    direccion: "Solis 565",
    deudas: false,
  },
];

// const jovenes =
//   clientes.edad < 40 ? console.log("jovenes") : console.log("no tan jovenes");

// const deudores = clientes.filter((cliente) => cliente.deudas === true);
// console.log("Clientes con deudas vigentes: " + "\n");
// console.log(deudores);

// const noDeudores = clientes.filter((cliente) => cliente.deudas === false);
// console.log("Clientes sin deudas vigentes: " + "\n");
// console.log(noDeudores);

const arrayEmpleados = [
  "Marcos",
  "Tadeo",
  "Uriel",
  "Esteban",
  "Nahuel",
  "Cintia",
  "Romina",
  "Nahiara",
  "Martina",
  "Kiara",
  "Luna",
];

// console.log(
//   "Lista completa empleados de PET CARE: " + "\n" + arrayEmpleados.join(" / ")
// );

// console.log(
//   "Cantidad de empleados a la fecha: " + "\n" + arrayEmpleados.length
// );

// console.log("Empleados masculinos: " + "\n" + arrayEmpleados.slice(0, 5));
// console.log("Empleados femeninos: " + "\n" + arrayEmpleados.slice(5));

const insumosMedicos = [];
const addInsumo = (insumo) => {
  insumosMedicos.push(insumo);
};

addInsumo("Vacuna sextuple felina");
addInsumo("Vacuna sextuple canina");
addInsumo("Suero fisiologico");
addInsumo("Anestecia general hasta 5kg");


            /*ALGORITMOS INTERACCION CON HTML*/
const container = document.getElementById("contenedorServ")

function mostrarServicios() {
  servicios.forEach((servicios) => {
    const { id, nombre, precio, imagen } = servicios;
    let card = document.createElement("div");
    card.className = "cardService";
    card.innerHTML = `
        <div>
        <img src="${imagen}" alt="fotoServicio">
        </div>
        <div>
        <p class="title">${nombre}</p>
        </div>
        <div>
        <p> <b> $ </b>${precio}</p>
        </div>
        <div>
        <p class="infoServ">Para mas info entra a <span>www.PetCareLatam.com</span></p>`;
    container.appendChild(card);

  });
}
mostrarServicios();

// Spread
const clientesZN = [
  "RAMOS JOSEFINA",
  "MIRAFLORES LAURA",
  "CARBALLO JULIO",
  "ZONDA ARTURO",
  "SOSA ISMAEL",
];

const clientesZS = [
  "ALCIBAR RUBEN",
  "CASSIERRA FERNANDA",
  "CORREA AUGUSTO",
  "BELTRAN MARIA",
  "CECCINI HUGO",
];

const clientesZO = [
  "COROMINAS AYLEN",
  "CORONA CINTHIA",
  "SAMPAYO TOBIAS",
  "SEPULBEDA MARINA",
  "ALMEYDA RUBEN",
];

const clientesZE = [
  "BRITO FABIAN",
  "ORTEGA YANINA",
  "COPPETTI BRAIAN",
  "MALNATTI ESTEBAN",
  "JARAMILLO YESABEL",
];

const clientesCABA = [
  "MIRNES OCTAVIO",
  "MORIATTI ALEJANDRA",
  "DE PALMA FRANCIS",
  "FIGUEROA VERONICA",
  "GUALTIERI PAMELA",
];

const clientesTotal = [
  ...clientesCABA,
  ...clientesZE,
  ...clientesZN,
  ...clientesZO,
  ...clientesZS,
];

// console.log("Listado de clientes: " + "\n" + clientesTotal);

// const desicion =
//   clientesTotal.lenght < 15
//     ? console.log("Pocos clientes")
//     : console.log("Muchos clientes");

const clientesDestacados = [
  {
    nombre: "MIRNES OCTAVIO",
    id: "01",
    ciudad: "Paternal",
  },
  {
    nombre: "RAMOS JOSEFINA",
    id: "02",
    ciudad: "Tigre",
  },
  {
    nombre: "CASSIERRA FERNANDA",
    id: "03",
    ciudad: "Avellaneda",
  },
  {
    nombre: "CORONA CINTHIA",
    id: "04",
    ciudad: "Moron",
  },
];

const btnCts= document.getElementById("mostrarClientes")
function verClientes() {
  btnCts.addEventListener("click", () => {
    const contenedorCts = document.getElementById("contenedorClientes");
    contenedorCts.innerHTML = "";
    for (let i = 0; i < clientesDestacados.length; i++) {
      const elemento = clientesDestacados[i];
      const { nombre, id, ciudad } = elemento;
      const div = document.createElement("div");
      div.className = "cardClientes";
      div.innerHTML = `
           <div>
           <h5>${nombre}</h5>
           </div>
           <div>
           <h6> ${ciudad}</h6>
           </div>
           `;
      contenedorCts.appendChild(div);
    }
    const button = document.createElement("div");
    button.innerHTML = `
    <button id="btnClose">Ocultar</button>`;
    contenedorCts.appendChild(button);
    const btnClose = document.getElementById("btnClose");
    btnClose.addEventListener("click", () => {
      contenedorCts.innerHTML = "";
    });
  });
}
verClientes()
















