// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// console.log("js funzia")


const userOddEven = prompt("scgli pari o dispari");


    if(userOddEven === "pari" || userOddEven === "dispari"){

        const userNumber = prompt("Inserisci un numero da 1 a 5");

        if(userNumber > 0 && userNumber <= 5){

            console.log(`Giocatore sceglie: ${userOddEven} con il numero: ${userNumber}`)

            const pcNumber = randomNumberGenerator(1, 5);

            console.log(`il pc sceglie il numero: ${pcNumber}`)


            const result = oddOrEven(userNumber, pcNumber)

        }
        else{
            console.log("Assicurati di aver inserito un numero da 1 a 5")
        }
    }
    else{
        console.log("Assicurati di aver scelto pari o dispari!")
    }



function randomNumberGenerator (min, max){

    let randomNumber = Math.floor(Math.random() * (max)) + min; 

    return randomNumber
}


function oddOrEven (numbA, numbB){

    const numberOne = parseInt(numbA); //number
    const numbertwo = parseInt(numbB); //number

    const sum = numberOne + numbertwo;

    const evenOrOddCheck = sum % 2;
    
    if(evenOrOddCheck === 0){
        console.log("Vince Pari")
        // console.log(sum)
        // console.log(evenOrOddCheck)
    }
    else{
        console.log("Vince dispari")
        // console.log(sum)
        // console.log(evenOrOddCheck)
    }
}

