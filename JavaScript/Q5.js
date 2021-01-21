function reverseNumber(x) {
  var xToString = x.toString();
  var result = xToString.split("").reverse().join("");
  console.log(result);
  return result;
}
reverseNumber(32243);
