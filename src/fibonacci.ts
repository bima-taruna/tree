function fibonacciIterative(params: number): number {
  if (params === 0) {
    return 0;
  }
  if (params === 1 || params === 2) {
    return 1;
  }
  let before = 1;
  let after = 1;
  let answer = 0;
  let count = 3;
  while (count <= params) {
    answer = before + after;
    before = after;
    after = answer;
    count++;
  }
  return answer;
}

function fibonacciRecursive(params: number): number {
  let answer = 0;
  return answer;
}

export { fibonacciIterative, fibonacciRecursive };
