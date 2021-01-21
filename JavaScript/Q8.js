function mergeSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const array = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return array.concat(left.slice()).concat(right.slice());
}

//mergeSort([34, 7, 23, 32, 5, 62]);
console.log(mergeSort([34, 7, 23, 32, 5, 62]));
