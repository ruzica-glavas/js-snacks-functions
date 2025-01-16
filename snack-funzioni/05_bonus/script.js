/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

greetingsRoutine = () => {

    let time= new Date().getHours()

        if(time<=13){
            return(`Buongiorno ${name}`)
    }else if(time>13 && time<=17){
        return(`Buon pomeriggio ${name}`)

    }else{
        return(`Buonasera ${name}`)
    }
}

// Invoca la funzione qui e stampa il risultato in console

console.log(greetingsRoutine(name))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.