function reverseString(str: string) {
  let answer = [];
  for (let i = str.length; i >= 0; i--) {
    answer.push(str[i]);
  }
  return answer.join("");
}

function reverseStringRecursive(str: string) {
  if (str.length === 0) {
    return "";
  }
  return str[str.length - 1] + reverseStringRecursive(str.slice(0, -1));
}

export { reverseString, reverseStringRecursive };
