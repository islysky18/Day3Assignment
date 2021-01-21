function isNan(value) {
  return value !== value;
}

console.log(isNan(NaN));
console.log(isNan("1"));
