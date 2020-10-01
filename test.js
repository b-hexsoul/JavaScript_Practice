function solution(number) {
  return number < 1 ? 0 : [...new Array(number).keys()].filter((n) => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}

console.log(solution());
console.log(solution(0));
console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
