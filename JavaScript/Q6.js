function findSecondLowestAndGreatest(nums) {
  nums.sort();

  let start = 0;
  let end = nums[nums.length - 1];
  var result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      result.push(nums[i + 1]);
      break;
    } else {
      start++;
    }
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] != nums[j - 1]) {
      result.push(nums[j - 1]);
      break;
    } else {
      end--;
    }
  }
  console.log(result);

  //console.log(end);
  //console.log(nums);
}
//findSecondLowestAndGreatest([1, 2, 7, 5, 6, 9, 9]);
findSecondLowestAndGreatest([1, 2, 3, 4, 5]);
//console.log(findSecondLowestAndGreatest([1, 2, 3, 4, 5]));
