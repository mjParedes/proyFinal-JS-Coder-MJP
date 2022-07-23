const petContainer = document.getElementById("petsContainer");
const buscador = document.getElementById("buscarPet")
const btnBuscar = document.getElementById("btnBuscar")
const btnAct = document.getElementById("btnAct") 
let mascotas = []

// CONSUMO DE API CON FETCH, PROMISES , ASYNC AWAIT
async function mostrarMascotas() {
  try {
    await fetch("https://api.thedogapi.com/v1/breeds?limit=88")
    .then(response => response.json())
    .then(data => {
      mascotas = data
      crearMascotas()
    })
  } catch (error) {
    console.log(error.message)
  }
}
mostrarMascotas();

function crearMascotas() {
  mascotas.forEach((element) => {
    const card = document.createElement("div");
    card.id = element.id
    card.className = "cardPets";
    card.innerHTML = `
            <img src="${element.image["url"]}" alt"picture"
            <div>
                <p class="title">${element.name}</p>
                <p>${element.breed_group}</p>
            </div>`;
    petContainer.appendChild(card);
  });
}

// FILTRADO DE DATOS
function filtrado () {
  petContainer.innerHTML= ""
  let razasFiltradas = mascotas.filter(item => item.name.toLowerCase() === buscador.value.toLowerCase())
  if(!razasFiltradas.length){
    petContainer.innerHTML= ""
    const error= document.createElement("h3")
    error.innerText= "No hubo coincidencias"
    petContainer.append(error)
  }
  razasFiltradas.forEach((element) => {
    const card = document.createElement("div"); 
    card.className = "cardPets";
    card.innerHTML = `
              <img src="${element.image["url"]}" alt"picture"
              <div>
                  <p class="title">${element.name}</p>
                  <p>${element.breed_group}</p>
              </div>`;
    petContainer.appendChild(card);
  })

}

btnBuscar.addEventListener("click", filtrado)
btnAct.addEventListener("click", function() {
  petContainer.innerHTML= ""
  mostrarMascotas()
} )




