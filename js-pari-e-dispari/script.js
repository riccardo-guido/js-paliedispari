const sceltaUtente = prompt("Scegli: pari o dispari").toLowerCase(); // Chiediamo all'utente se sceglie "pari" o "dispari" e lo convertiamo in minuscolo


const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5")); // Chiediamo all'utente di inserire un numero da 1 a 5 e lo convertiamo in numero intero

// Funzione che genera un numero casuale intero tra 1 e 5 per il computer
function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;  // Math.random() genera un numero decimale tra 0 e 1  // Moltiplichiamo per 5 → otteniamo un numero tra 0 e 4.999... // Math.floor lo arrotonda verso il basso → otteniamo un intero tra 0 e 4 // Aggiungiamo 1 per avere un numero da 1 a 5
}


const numeroComputer = generaNumeroRandom(); // Usiamo la funzione per generare il numero casuale del computer


console.log(`Hai scelto: ${sceltaUtente}`);    // Stampiamo le scelte fatte
console.log(`Il tuo numero: ${numeroUtente}`);
console.log(`Numero del computer: ${numeroComputer}`);


const somma = numeroUtente + numeroComputer;  // Calcoliamo la somma tra il numero dell’utente e quello del computer


function pariODispari(numero) {    // Funzione per determinare se un numero è "pari" o "dispari"
  
  if (numero % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}


const risultato = pariODispari(somma);  // Usiamo la funzione per sapere se la somma è pari o dispari


console.log(`La somma è: ${somma}, quindi è ${risultato}`); // Stampiamo il risultato della somma e se è pari o dispari

// Confrontiamo la scelta dell’utente con il risultato effettivo
if (sceltaUtente === risultato) {
  // Se corrispondono, ha vinto l’utente
  console.log("Hai vinto! 🎉");
} else {
  // Altrimenti ha vinto il computer
  console.log("Ha vinto il computer. 💻");
}
