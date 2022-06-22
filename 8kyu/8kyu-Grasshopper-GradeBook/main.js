function getGrade (s1, s2, s3) {
  let result = (s1 + s2 + s3)/3;
  if( result >= 90 ) {
      return 'A';
  } else if (80 <= result && result < 90 ) {
    return 'B';
  } else if (70 <= result && result < 80 ) {
    return 'C';
  } else if (60 <= result && result < 70 ) {
    return 'D';
  } else if (0 <= result && result < 60 ) {
    return 'F';
  } else {
      return undefined;
  }
 
}