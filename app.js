const API = "https://api.dictionaryapi.dev/api/v2/entries/en/"
 
// EL BUSCADOR SE HACER CON UN EVENTLINTENER ("INPUT")



    document.getElementById("Palabra").addEventListener("input",() => {

        const Palabra = document.getElementById("Palabra").value

        fetch(API+Palabra, { 
            headers:{
                'Content-Type': 'application/json'
              }
        }) 
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {console.log(response), document.getElementById("resultado").innerHTML = `
        
        <h2> ${response[0].word}</h2>
        <p> ${response[0].meanings[2].definitions[0].definition}</p>`
        });
    
    } ) 





