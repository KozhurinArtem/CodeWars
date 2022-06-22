function narcissistic(value) {
  let val = value;
  let num = val.toString();
  let arr = num.split('');
  let exp = arr.length;
  let newArr = [];
  newArr = arr.map(e => Math.pow(e, exp));
  let result = newArr.reduce((acc, rec) => acc + rec);
  return result === value;

}