function numSum(a) {
  function numOne (b) {
    return a + b;
  }
  return numOne;
}
sum_numOne = numSum(5);
result = sum_numOne(9);
result1 = numSum(5)(9);
console.log(result1);