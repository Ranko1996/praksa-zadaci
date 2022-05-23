/*
  Opis:
     Napišite funkciju pod nazivom repeater() koja uzima dva argumenta (string i broj) i vraća novi string gdje se ulazni string ponavlja toliko puta.
   primjeri:
     repeater("a", 5) bi trebao vratiti "aaaaa"
     repeater("xyz", 3) bi trebao vratiti "xyzxyzxyz"

*/

//----------------RJEŠENJE ZADATAKA ------------
function repeater(str, num){
  let arr = []
  let i = 0;
  do{
    arr.push(str)
    i++
  }
  while(i < num)
  return arr.join("")
}






//---------------------------------------------------
// Function Export
module.exports = repeater