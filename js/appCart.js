// FUNCIONALIDAD CARRITO DE COMPRAS

const contenedorShop = document.getElementById("shopContainer")
const contenedorCarrito= document.getElementById("contenedorCarrito")
const contadorCarrito = document.getElementById("cartCounter")
const precioTotal= document.getElementById("precioTotal")
const botonVaciar= document.getElementById("vaciar-carrito")
const botonFinalizar= document.getElementById("finalizarCompra")
let carrito= [];

document.addEventListener("DOMContentLoaded", () =>{
    if(localStorage.getItem("carrito")){
        carrito= JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener("click", () => {
    carrito.length= 0
    localStorage.setItem("carrito", JSON.stringify(carrito))
    actualizarCarrito()
})

botonFinalizar.addEventListener("click", () => {
    carrito.length= 0
    localStorage.setItem("carrito", JSON.stringify(carrito))
    actualizarCarrito()
    Swal.fire({
        icon: "success",
        title: "Felicitaciones",
        text:"Tu compra se ha efectuado correctamente"
    })
})

productos.forEach((productos) => {
    const { nombre,precio,id,img } = productos;
    const div = document.createElement("div")
    div.classList.add("cardProductos")
    div.innerHTML= `
    <img src="${img}" alt="">
    <h6 class="title">${nombre}</h6>
    <p>Precio: $ ${precio}</p>
    <button id="agregar${id}" class="botonAgregar">Agregar <i class="fas fa-shoping-cart"></i></button>`
    contenedorShop.append(div)

    const boton = document.getElementById(`agregar${id}`)
    
    boton.addEventListener("click", () => {
        Swal.fire({
            title:"PetCare",
            html: `
            <h5>
                Has agregado: <b>${nombre}</b>  al carrito
            </h5>`
        })
        agregarAlCarrito(id)
    } )
});

const agregarAlCarrito= (prodID) => {
    const existe= carrito.some(prod => prod.id === prodID )

    if(existe){
        const prod = carrito.map(prod => {
            if(prod.id === prodID){
                prod.cantidad++
            }
        } )
    }else{
        const item = productos.find((prod) => prod.id===prodID)
        carrito.push(item)
    }
actualizarCarrito()
}

const eliminarDelCarrito= (prodID) =>{
    const item= carrito.find((prod) => prod.id === prodID)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito()
}

const totalCarrito= ()=>{
    return carrito.reduce((acc, prod) => acc+prod.precio*prod.cantidad,0)
}

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = ""
  
  carrito.forEach((productos) => {
    const { nombre, precio, cantidad, id, img} = productos;
    const div = document.createElement("div");
    div.className = "productoEnCarrito";
    div.innerHTML = `
        <p>${nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad: <span id="cantidad">${cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${id})" class="botonEliminar"><i class="fas fa-trash-alt"></i></button>`;
    contenedorCarrito.appendChild(div);

    localStorage.setItem("carrito", JSON.stringify(carrito))

  });
  contadorCarrito.innerText = carrito.length;  
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
  
};




