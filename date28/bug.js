{
  //Bug Challenge 9: Reverse String
  function reverseString(str) {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
      reverse += str[i];
    }

    return reverse;
  }

  console.log(reverseString("JavaScript"));
}
console.log("--------------------");
{
  // Bug Challenge 10: Find Number
  function hasNumber(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return true;
      }
    }

    return false;
  }

  console.log(hasNumber([5, 10, 15, 20], 20));
}
console.log("--------------------");
{
  //  Bug Challenge 11 //\\ Hard Level
  function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
      result *= i;
    }

    return result;
  }

  console.log(factorial(5));
}

console.log("--------------------");
{
  // Bug Challenge 12
  const numbers = [2, 4, 6, 8];
  let result;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result = "All numbers are even";
    }
  }
  console.log(result);
}
console.log("--------------------");
{
  // Bug Challenge 13
  function removeNegative(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        result.push(arr[i]);
      }
    }

    return result;
  }

  console.log(removeNegative([-2, 5, -1, 8, 0, 9]));
}
console.log("--------------------");
{
  // Bug Challenge 14
  function countChar(str, ch) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === ch) {
        count++;
      }
    }

    return count;
  }

  console.log(countChar("banana", "a"));
}
console.log("--------------------");
{
  // Bug Challenge 15
  function secondLargest(arr) {
    let largest = arr[0];
    let second = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        second = largest;
        largest = arr[i];
      } else if (arr[i] > second && second < largest) {
        second = arr[i];
      }
    }

    return second;
  }

  console.log(secondLargest([10, 40, 20, 80, 60]));
}
console.log("--------------------");
{
  // Bonus Challenge (Multiple Bugs)
  function sumOdd(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        total += arr[i];
      }
    }

    return total;
  }

  console.log(sumOdd([1, 2, 3, 4, 5, 6, 7]));
}
console.log("--------------------");
{
  // Bug Challenge 16: Smallest Number
  function findSmallest(arr) {
    let smallest = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (smallest > arr[i]) {
        smallest = arr[i];
      }
    }

    return smallest;
  }

  console.log(findSmallest([10, 5, 2, 8, 1]));
}
console.log("--------------------");
{
  // Bug Challenge 17: Count Odd Numbers
  function countOdd(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        count++;
      }
    }

    return count;
  }

  console.log(countOdd([1, 2, 3, 4, 5, 6, 7]));
}
console.log("--------------------");
{
  // Bug Challenge 18: Array Copy
  function copyArray(arr) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
      newArray.push(arr[i]);
    }

    return newArray;
  }

  console.log(copyArray([5, 10, 15, 20]));
}
console.log("--------------------");
{
  // Bug Challenge 19: Find Index
  function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }

    return -1;
  }

  console.log(findIndex([10, 20, 30, 40], 40));
}
console.log("--------------------");
{
  // Bug Challenge 20: Sum of Even Numbers
  function sumEven(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }

    return sum;
  }

  console.log(sumEven([1, 2, 3, 4, 5, 6]));
}
console.log("--------------------");
{
  // Bug Challenge 21
  function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        return true;
      }
    }

    return false;
  }

  console.log(isSorted([1, 2, 3, 4, 5]));
}
console.log("--------------------");
