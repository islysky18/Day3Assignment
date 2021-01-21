function isSameType(value1, value2) {
  if (isNan(value1) || isNan(value2)) {
    return isNan(value1) === isNan(value2);
  } else {
    return toString.call(value1) === toString.call(value2);
  }
}

function isNan(value) {
  return value !== value;
}

console.log(isSameType(1, 1));
console.log(isSameType(1, "1"));
