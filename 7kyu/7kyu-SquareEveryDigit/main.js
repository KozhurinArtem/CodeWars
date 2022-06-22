function squareDigits(num){
  let a = num.toString().split('').map((num) => num ** 2).join('');
let b = parseInt(a, 10);
return b;
}