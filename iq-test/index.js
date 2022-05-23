/*
  Opis:
     Pero se sprema proći test inteligencije. Najčešći zadatak u ovom testu je
     kako saznati koji se od zadanih brojeva razlikuje od ostalih.
     Pero je primijetio da se jedan broj obično razlikuje od ostalih po parnosti.
     Pomozite Peri — da provjeri svoje odgovore, potreban mu je program koji među
     zadanim brojevima pronalazi onaj koji se razlikuje po parnosti, i vrati poziciju tog broja.
   
   Primjeri:
     iqTest("2 4 7 8 10") => 3 // Treći broj je neparan, dok su ostali brojevi parni
     iqTest("1 2 1 1") => 2 // Drugi broj je paran, dok su ostali brojevi neparni
   
   Bilješke:
     Imajte na umu da je vaš zadatak pomoći Peri riješiti pravi IQ test,
     što znači da indeksi elemenata počinju od 1 (ne od 0)
  */

//----------------RJEŠENJE ZADATAKA ------------

function iqTest(numbers){
  let numArr = numbers.split(" ");
  let obj = {}
  obj.evenCount = 0;
  obj.oddCount = 0;
  
  for(let i = 0; i < numArr.length; i++){
    if(numArr[i] % 2 === 0){
      obj.evenCount += 1;
      obj.even = i + 1;
    } else {
      obj.oddCount += 1;
      obj.odd = i + 1;
    }
  }

  if(obj.evenCount < obj.oddCount) {
    return obj.even
  } else {
    return obj.odd
  }
}




//---------------------------------------------------

// Function Export
module.exports = iqTest;
