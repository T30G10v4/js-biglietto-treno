/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 
*/

/*  
    PSEUDOCODICE 
    INGRESSO - NUMERO CHILOMETRI 
    INGRESSO - ETA PASSEGGERO
    
    SCONTO = 1

    SE (ETA < 18)
        SCONTO = 0.8
    SE INVECE (ETA > 65)
        SCONTO = 0.6
    
    PREZZO VIAGGIO = CHILOMETRI * COSTO AL CHILOMETRO * SCONTO

    USCITA - PREZZO VIAGGIO

*/

const kilometers = parseInt(prompt("Inserisci i chilometri"));
console.log("kilometers", kilometers, typeof(kilometers));

const age = parseInt(prompt("Inserisci l'età del passeggero"));
console.log("age", age, typeof(age));

let discount = 1.00;
console.log("discount", discount, typeof(discount));

if (age < 18) {

    discount = 0.8;
    console.log("discount", discount, typeof(discount));

} else if (age > 65) {

    discount = 0.6;
    console.log("discount", discount, typeof(discount));

}

const price = kilometers * 0.21 * discount;
console.log("price", price, typeof(price));

document.getElementById("price").innerHTML = price;










