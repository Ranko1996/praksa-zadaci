/*
  Opis:
     Napišite funkciju pod nazivom sumDigits koja prima jedan parametar koji je broj 
     i koja kao rezultat vraća zbroj apsolutne vrijednosti svake decimalne znamenke broja.
     Pretpostavimo da će svi brojevi na ulazu biti cjelobrojne vrijednosti.
   
     Primjeri:
     sumDigits(10);    // Vraća 1
     sumDigits(99);    // Vraća 18
     sumDigits(-32);   // Vraća 5
*/

//----------------RJEŠENJE ZADATAKA ------------

function sumDigits(n) {
  let positiveNum = Math.abs(n)
  let positives = positiveNum.toString().split("")
  let sum = positives.reduce(function(a, b){
    return parseInt(a) + parseInt(b)
  },0)
  return sum
}





//---------------------------------------------------

// Function Export
module.exports = sumDigits