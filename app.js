const API = "https://api.dictionaryapi.dev/api/v2/entries/en/"
 

const inputpalabra = document.getElementById('palabra')
const boton = document.getElementById('boton')
const resultado = document.getElementById('resultado')
const Darkmode = document.getElementById('Darkmode');
const fuentes = document.getElementById('Fuentes');
const body = document.body

function Busquedadebounce(func, delay){
    let timeoutId;
    return function(...args){
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(()=>{
            func.apply(this, args);
        }, delay);
    }
}

const buscar = Busquedadebounce(()=> {

    const Palabra = inputpalabra.value

        fetch(API+Palabra) 
        .then(res => res.json())
        .then(response => {
            const data = response[0]
            const definitions = data.meanings.map(meaning => meaning.definitions[0].definition);
            resultado.innerHTML = `
            <h2> ${data.word}</h2>
            <ul>
            ${definitions.map(definition => `<li>${definition}</li>`).join('')}
            </ul>`
        

        })
        .catch(error => {resultado.innerHTML = `No se encontraron resultados para ${Palabra}`});
    
}, 500);

inputpalabra.addEventListener('input', buscar)
boton.addEventListener('click', buscar)

fuentes.addEventListener('change', ()=> {
    const fuentesclass = fuentes.value

    if(body.classList.contains('Darkmode')){
        body.classList = ''
        body.classList.add('Darkmode', fuentesclass)
    } else {
        body.classList = ''
        body.classList.add(fuentesclass) 
    }
})


Darkmode.addEventListener('click',()=> {
    body.classList.toggle('Darkmode');
    if (body.classList.contains('Darkmode')){
        Darkmode.textContent = 'Modo claro'
    } else Darkmode.textContent = 'Modo Oscuro'
})







