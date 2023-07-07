const API = "https://api.dictionaryapi.dev/api/v2/entries/en/"
 

const palabra = document.getElementById('palabra')
const boton = document.getElementById('boton')
const resultado = document.getElementById('resultado')


    document.getElementById("boton").addEventListener("click",() => {

        const Palabra = document.getElementById("palabra").value

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
    
    } ) 





