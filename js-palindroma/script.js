const parolaUtente = prompt("Inserisci una parola:");  //chiedo all'utente di inserire una parola 

function parolaPalindroma(parola) { //dichiaro la funzione parolaPalindroma(parametro) che richiede un parametro quando viene chiamata 
    const parolaPulita = parola;   //dichiaro una costante che è uguale al valore del parametro
    let parolaInvertita = "";   //creo una variabile vuota dove costruiremo la parola al contrario

   for (let i = parolaPulita.length - 1; i >= 0; i--) {  // Parte dall’ultima lettera della parola (length - 1) // Ogni giro prende una lettera e la aggiunge in fondo a parolaInvertita // Così, alla fine del ciclo, parolaInvertita è la parola al contrario  
      parolaInvertita += parolaPulita[i]; 
    }
    
    return parolaPulita === parolaInvertita;   // confronta la parola normale con quella invertita, se sono uguali la parola è palindroma se sono diverse non lo è, restituirà quindi true o false
  }

if (parolaPalindroma(parolaUtente)) {       //la funzione restituirà un booleano, quindi se è true verrà eseguito il primo console.log mentre se è false verrà eseguito il secondo console.log
  console.log("La parola è palindroma!");
} else {
  console.log("La parola non è palindroma.");
}