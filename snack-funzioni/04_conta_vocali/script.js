/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

    countVowels=(word)=>{

        let vowels=("a,e,i,o,u,A,E,I,O,U")
        let extractVowels=[]
        let somma=0

        for(i=0; i<word.length; i++){

            if(vowels.includes(word[i])){
                somma += vowels.includes(word[i]) ?1 :0
                extractVowels.push(word[i])
            }

        }

        return (somma, extractVowels)

    }

// Invoca la funzione qui e stampa il risultato in console

console.log(countVowels(word))



//Risultato atteso se si passa 'javascript': 3 (a, a, i)