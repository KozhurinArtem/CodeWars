function disemvowel(str) {
  let arr = str.split('');
  arr = arr.filter( (e) => { return e != 'a' && e != 'e' && e != 'i' && e != 'o' && e != 'u'  && e != 'A' && e != 'E'&& e != 'I' && e != 'O' && e != 'U'
});
  arr = arr.join('');
  return arr
}