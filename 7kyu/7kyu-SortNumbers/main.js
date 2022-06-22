function solution(nums) {
  function compareNumbers(a, b) {
    return a - b;
  }

  if (nums !== null) {
    return nums.sort(compareNumbers);
  } else {
    return []
  }


}