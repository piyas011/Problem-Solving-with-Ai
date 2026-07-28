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
{
  // Bug Challenge 22
  function countWords(sentence) {
    let words = sentence.split(" ");

    return words.length;
  }

  console.log(countWords("I love JavaScript"));
}
console.log("--------------------");
{
  // Bug Challenge 23
  function removeZero(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        continue;
      }
      result.push(arr[i]);
    }

    return result;
  }

  console.log(removeZero([0, 5, 3, 0, 7, 9]));
}
console.log("--------------------");
{
  // Bug Challenge 24
  function totalLength(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += arr[i].length;
    }

    return total;
  }

  console.log(totalLength(["apple", "banana", "cat"]));
}
console.log("--------------------");
{
  // Bug Challenge 25 (🔥 Multiple Bugs)
  function highestEven(arr) {
    let highest = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        if (arr[i] > highest) {
          highest = arr[i];
        }
      }
    }

    return highest;
  }

  console.log(highestEven([7, 12, 3, 20, 16, 9]));
}
console.log("--------------------");
{
  // Boss Challenge (5+ Bugs)
  function analyzeArray(arr) {
    let sum = 0;
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];

      if (arr[i] > max) {
        max = arr[i];
      }

      if (arr[i] < min) {
        min = arr[i];
      }
    }

    return {
      sum,
      max,
      min,
      average: sum / arr.length,
    };
  }

  console.log(analyzeArray([10, 20, 30, 40, 50]));
}
console.log("--------------------");
{
  //Bug Challenge 26
  // fix: calculate the sum of all odd numbers in an array
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
  // Bug Challenge 27
  // fix: count the number of vowels in a string
  function countVowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
      ) {
        count++;
      }
    }

    return count;
  }

  console.log(countVowels("javascript"));
}
console.log("--------------------");
{
  // Bug Challenge 28
  //fix: return the largest odd number from an array
  function largestOdd(arr) {
    let largest = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0 && arr[i] > largest) {
        largest = arr[i];
      }
    }

    return largest;
  }

  console.log(largestOdd([12, 5, 18, 21, 7]));
}
console.log("--------------------");
{
  // Bug Challenge 29
  //fix: count positive numbers in an array
  function countPositive(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        count++;
      }
    }

    return count;
  }

  console.log(countPositive([-1, 2, 5, -3, 9]));
}
console.log("--------------------");
{
  // Bug Challenge 30
  // fix: reverse a string without using built-in methods
  function reverseString(str) {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
      reverse += str[i];
    }

    return reverse;
  }

  console.log(reverseString("hello"));
}
console.log("--------------------");
{
  // Bug Challenge 31
  // fix: find the smallest even number in an array
  function smallestEven(arr) {
    let smallest = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0 && arr[i] < smallest) {
        smallest = arr[i];
      }
    }

    return smallest;
  }

  console.log(smallestEven([15, 8, 12, 4, 20]));
}
console.log("--------------------");
{
  // Bug Challenge 32
  // fix: count how many times a target number appears in an array
  function countTarget(arr, target) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        count++;
      }
    }

    return count;
  }

  console.log(countTarget([2, 5, 2, 7, 2], 2));
}
console.log("--------------------");
{
  // Bug Challenge 33
  // fix: calculate the product of all numbers in an array
  function multiplyAll(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }

    return product;
  }

  console.log(multiplyAll([2, 3, 4]));
}
console.log("--------------------");
{
  // Bug Challenge 34
  // fix: find the first negative number in an array
  function firstNegative(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        return arr[i];
      }
    }

    return null;
  }

  console.log(firstNegative([5, 10, -2, -7]));
}
console.log("--------------------");
{
  //  Bug Challenge 35 (🔥 Boss)
  // fix: analyze an array to calculate sum, average, maximum, and minimum values
  function analyzeArray(arr) {
    let sum = 0;
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];

      if (arr[i] > max) {
        max = arr[i];
      }

      if (arr[i] < min) {
        min = arr[i];
      }
    }

    return {
      sum: sum,
      average: sum / arr.length,
      max: max,
      min: min,
    };
  }

  console.log(analyzeArray([12, 8, 20, 5, 15]));
}
console.log("--------------------");
{
  // Bug Challenge 36
  // fix: find the second smallest number in an array
  function secondSmallest(arr) {
    let smallest = arr[0];
    let second = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        second = smallest;
        smallest = arr[i];
      }

      if (arr[i] < smallest && arr[i] > second) {
        second = arr[i];
      }
    }

    return second;
  }

  console.log(secondSmallest([8, 3, 5, 9, 1, 6]));
}
console.log("--------------------");
