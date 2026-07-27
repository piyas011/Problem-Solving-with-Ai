{
  //  Bug Challenge 1
  function add(a, b) {
    return a + b;
  }
  console.log(add(10, 20));
}
console.log("--------------------");
{
  //Bug Challenge 2
  let total = 0;

  for (let i = 1; i <= 5; i++) {
    total += i;
  }

  console.log(total);
}
console.log("--------------------");
{
  // Bug Challenge 3
  const numbers = [10, 20, 30, 40];

  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}
console.log("--------------------");
{
  // Bug Challenge 4
  function isEven(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  console.log(isEven(8));
}
console.log("--------------------");
{
  // Bug Challenge 5
  const fruits = ["Apple", "Banana", "Mango"];

  console.log(fruits[1]);
}
console.log("--------------------");
{
  // Bug Challenge 6: Average Calculator
  function average(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    return sum / numbers.length;
  }

  console.log(average([10, 20, 30, 40]));
}
console.log("--------------------");
{
  // Bug Challenge 7: Find Maximum
  function findMax(arr) {
    // let max = 0;
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }

    return max;
  }

  console.log(findMax([5, 12, 3, 25, 8]));
}
console.log("--------------------");
{
  // Bug Challenge 8: Count Positive Numbers
  function countPositive(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        count++;
      }
    }

    return count;
  }

  console.log(countPositive([-5, 10, -2, 8, 0, 7, 3, 4, 5, 50]));
}
console.log("--------------------");
