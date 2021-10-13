function getMoneySpent(keyboards, drives, b) {
  let result = [];
  keyboards.forEach((keyboard) => {
    drives.forEach((drive) => {
      if (keyboard + drive <= b) result.push(keyboard + drive);
    });
  });
  if (result.length === 0) {
    return -1;
  } else {
    return Math.max(...result);
  }
}

const result = getMoneySpent([1], [5], 9);
console.log(result);
