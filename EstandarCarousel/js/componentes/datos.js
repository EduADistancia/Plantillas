// Carga de datos (locales o externos)

const fuente = "./data/datosCarousel.json";

async function cargarDatos() {
    let data = await fetch(fuente)
                        .then(res => res.json());
    crearTarjetas(data);                   
}

// Creación de tarjetas
function crearTarjetas(datos) {
    let tipos = {
        texto: 'p',
        imagen: 'img',
    }

    let etiqDinamica = document.querySelector('#contenidoDinamico');

    for (let i = 0; i < datos.length; i++){
        let div = document.createElement('div');
        div.classList = ['tarjetaDinamica'];
        let h2 = document.createElement('h2');
        h2.innerHTML = datos[i]["referencia"]
        let contadorTarjeta = document.createElement('p');
        contadorTarjeta.style.textAlign = 'center';
        contadorTarjeta.className = 'contadorTarjeta';
        contadorTarjeta.innerHTML = `${i+1} de ${datos.length}`;
        
        
        let tipoCont = datos[i]["tipo"];

        
        let divCont = document.createElement('div');
        let cont;

        if (Object.keys(tipos).includes(tipoCont)){
            cont = document.createElement(tipos[tipoCont]);
            if (tipos[tipoCont] != 'p'){
                cont.setAttribute('src', datos[i]["contenido"]);
            } else {
                cont.innerHTML = datos[i]["contenido"];
            }
        } else {
            cont = document.createElement('div');
            cont.innerHTML = datos[i]["contenido"];
        }

        if (i != 0){
            div.classList.add('oculto')
        } else {
            div.classList.add('visible')
        }
        divCont.appendChild(cont)
        div.append(h2, divCont, contadorTarjeta);
        etiqDinamica.appendChild(div);
    }
}

export { cargarDatos, crearTarjetas }