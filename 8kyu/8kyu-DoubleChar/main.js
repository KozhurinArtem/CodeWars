function doubleChar(str) {
  let copy = [];
 let arr =  str.split('');
 for (let i = 0; i < arr.length; i++) {
   copy.push(arr[i])
   copy.push(arr[i])
   }
  let newStr = copy.join('')
  return newStr;
}