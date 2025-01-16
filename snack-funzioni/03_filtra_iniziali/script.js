/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

letterStartChoice = (nomeArray, firstLetter) => {
    return nomeArray.filter(letter=>letter.startsWith(firstLetter))
}

// Invoca la funzione qui e stampa il risultato in console

console.log(letterStartChoice(names, "A"))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]