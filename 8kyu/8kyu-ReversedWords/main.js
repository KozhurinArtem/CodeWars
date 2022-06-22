function reverseWords(str){
  let string = str.split(" ");
  let rev = string.reverse();
  let outrev = rev.join(" ");
  return outrev;
}

console.log(reverseWords("The greatest victory is that which requires no battle"));