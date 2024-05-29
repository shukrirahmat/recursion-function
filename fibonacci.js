function fibs(n) {
  let result = [];
  let count = 0;

  while (count < n) {
    if (count == 0) {
      result.push(0);
    } else if (count == 1) {
      result.push(1);
    } else {
      const value = result[count - 1] + result[count - 2];
      result.push(value);
    }
    count++;
  }

  return result;
}

function fibsRec(n) {
  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  let previous = fibsRec(n - 1);
  return previous.concat([previous.at(-1) + previous.at(-2)]);
}

export { fibs, fibsRec };
