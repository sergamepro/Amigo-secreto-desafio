// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de 
// programación. Aquí deberás desarrollar la lógica para resolver el problema.
//alert("Bienvenido a tu lista de amigos");
let listamigos = [ ];
let nombre = document.getElementById('amigo');
// agregar nombre de amigo con validacion si se repite el nombre entrega una alerta

function agregarAmigo()
    {
    let nomAmigo = nombre.value
    if (nomAmigo === "") 
        {
            alert("Por favor, no dejar en blanco e inserte un nombre.");
        } else {
                if (listamigos.includes(nomAmigo))
                    {
                        alert("el nombre ya existe en la lista, agregar apellido");
                        return amigos;
                    }
                listamigos.push(nomAmigo);
                console.log(listamigos);
                nombre.value = "";
                mostrarAmigos();
                }
        }
// muestra el listado de nombre de los amigos ingresados
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < listamigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listamigos[i];
        lista.appendChild(li);
    }
}
// se sortea el nombre del amigo y entrega el resultado
function sortearAmigo() {
    let amigoSorteado = listamigos[Math.floor(Math.random() * listamigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = amigoSorteado;
}

