/*
   Opis:
     Za zadani skup brojeva, vratite inverz svakom od njih. Svaki pozitivan broj postaje negativan, a negativan postaje pozitivan.
   Primjeri:
     invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
     invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
     invert([]) == []
   Bilješke:
     Možete pretpostaviti da su sve vrijednosti u nizu cijeli brojevi.
*/

//----------------RJEŠENJE ZADATAKA ------------

function invert(array) {
  let inverted = []
  for(i=0; i < array.length; i++){
  if(array[i] < 0){
    inverted.push(Math.abs(array[i]))
  }
  if(array[i] > 0){
    inverted.push(array[i] - (array[i] * 2))
  }
  if(array[i] == 0){
    inverted.push(0)
  }
}
return inverted
}




//---------------------------------------------------

// Function Export
module.exports = invert

