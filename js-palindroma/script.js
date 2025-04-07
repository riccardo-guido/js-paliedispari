const parolaUtente = prompt("Inserisci una parola:");

function parolaPalindroma(parola) {
    const parolaPulita = parola;
    let parolaInvertita = "";
  
    for (let i = parolaPulita.length - 1; i >= 0; i--) {
      parolaInvertita += parolaPulita[i];
    }
  
    return parolaPulita === parolaInvertita;
  }

if (parolaPalindroma(parolaUtente)) {
  console.log("La parola è palindroma!");
} else {
  console.log("La parola non è palindroma.");
}