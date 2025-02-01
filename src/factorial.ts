function findFactorialRecursive(params: number): number {
  let answer = params;
  if (params === 1) {
    return params;
  }
  if (answer === 2) {
    return answer;
  }

  return answer * findFactorialRecursive(params - 1);
}

function findFactorialIterative(params: number): number {
  if (params === 1) {
    return params;
  }
  let answer = 1;
  for (let index = params; index > 1; index--) {
    answer *= index;
  }
  return answer;
}

export { findFactorialIterative, findFactorialRecursive };
