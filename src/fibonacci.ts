function fibonacciIterative(params: number): number {
  if (params <= 1) {
    return params;
  }
  let before = 0;
  let after = 1;
  let answer = 0;
  let count = 2;
  while (count <= params) {
    answer = before + after;
    before = after;
    after = answer;
    count++;
  }
  return answer;
}

function fibonacciRecursive(params: number): number {
  if (params <= 1) {
    return params;
  }

  return fibonacciRecursive(params - 1) + fibonacciRecursive(params - 2);
}

export { fibonacciIterative, fibonacciRecursive };
