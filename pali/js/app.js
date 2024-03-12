// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma:
//   -la funzione deve ritornare true se la parola è palindroma
//   -deve ritornare false se la parola non è palindroma
// alla fine stampate in console un messaggio per dire all’utente il risultato del controllo


const userWord = prompt("Scrivi una parola"); //string
// console.log(userWord);

const result = compare(userWord);


    if(result === true){
        console.log(`la parola ${userWord} è palindroma!`)
    }
    else{
        console.log(`la parola ${userWord} non è palindroma, provane un'altra`)
    }




function compare (word){
    // let word = userWord;

        for(let i = 0; i < word.length; i++){


            let index = i; //number
            let WordLength = word.at(index);

            // console.log(WordLength)
            
            let indexReverse = -1 - i; //number
            let WordLengthReverse = word.at(indexReverse);
            // console.log(WordLengthReverse)
            // console.log(indexReverse)

            if(WordLength === WordLengthReverse){
                return true
            }
            else{
                return false
            }
        }
}