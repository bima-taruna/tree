function reverseString(str: string) {
  let answer = [];
  for (let i = str.length; i >= 0; i--) {
    answer.push(str[i]);
  }
  return answer.join("");
}

function reverseStringRecursive(str) {}

export { reverseString, reverseStringRecursive };
