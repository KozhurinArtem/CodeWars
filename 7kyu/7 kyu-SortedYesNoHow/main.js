function isSortedAndHow(array) {
  let fns = {
    ascending: (v, i, a) => !i || a[i - 1] <= v,
    descending: (v, i, a) => !i || a[i - 1] >= v
  }
  direction = array[0] < array[array.length - 1] ?
    'ascending' :
    'descending'

  return array.every(fns[direction]) ?
    `yes, ${direction}` :
    'no';
}