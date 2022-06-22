function spinWords(string){
  let sentence = "";
  let arrString = string.split(" ");
    for( i = 0; i < arrString.length; i++) {
     if(sentence) sentence += ' ';
      if (arrString[i].length >= 5) {
      sentence += arrString[i].split('').reverse().join('');
    } else {
      sentence += arrString[i];
    }
    
  }
    return sentence;
    }
   console.log(spinWords("Hey fellow warriors"));