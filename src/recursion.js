// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n, ------------------------------------------------
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

// pass in n and have default param output
//output is 1 because multiplication and we don't want to multiply by 0
var factorial = function(n, output=1) {
  //base
  // edge case 1 if n < 0 return null
  if (n < 0){
    return null;
  };
  // edge case 2 if n is 0 return 1
  if (n === 0){
    return 1;
  };
  if (n === 1){
    return output;
  };
  //recursion
  //how to add output
  output *= n;
  // 1st: output = 1 * 5
  // 2nd: output = 5 * 4
  return factorial(n - 1, output);
  // 1st: return factorial (4, 5)
  // 2nd: return factorial (3, 20)
};
// console.log(factorial(5)); // logs 120 // works!


// 2. Compute the sum of an array of integers. ------------------------------------------------------------------------------------
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

/*
I: An array of integers
O: The sum of the integers
C: Recursive function
E: If array is empty, return 0 
   typeof sum must equal 'number'
*/

// default param is 0 to collect sum
var sum = (array, output=0) => {
  //base
  if (array.length === 0){
    return output;
  };
  //recursion
  //update output with first in array
  output += array[0];
  // return function with sliced array
  return sum(array.slice(1), output);
};


// 3. Sum all numbers in an array containing nested arrays. ---------------------------------------------------------------------------
// Example: arraySum([1,[2,3],[[4]],5]); // 15

// LOL I DIDN'T NEED TO DO THIS ONE
// // default param is 0 to collect sum
// var arraySum = (array, output=0) => {
//   // base
//   if (array.length === 0){
//     return output;
//   }

//   // recursion
//   output += array[0]; // output is reassigned to output + 1st in array
//   return arraySum(array.slice(1), output)
// };



// 4. Check if a number is even. ------------------------------------------------------------------------------------------------------
var isEven = function(n) {
  // base - if subtracting by 2 ends with 0, it was even all along
  if (n === 1) {
    return false;
    // base - if subtracting by 2 eventually hits 1, it was odd all along
  } else if (n === 0){
    return true;
  }
  // recursion
  // keep subtracting by 2 until you hit base case
  if (n < 0){
    // if it's negative add until hit 1 or 0
    return isEven(n+2);
    // if it's positive subtract until 1 or 0
  } else if (n > 0){
    return isEven(n-2);
  }
};
// console.log(isEven(5)); // false - works!


// 5. Sum all integers below a given integer. -----------------------------------------------------------------------------------------
// sumBelow(10); // 45
// sumBelow(7); // 21

// default param 0 to add sum
var sumBelow = (n, output=0) => {
  // base
  if (n === 0){
    return output;
  }
  
  // output starts at 1 below or 1 above
  if (n > 0){
    output += n-1;
  } else if (n < 0){
    output += n+1;
  }
  //recursion
  if (n > 0){
    return sumBelow(n-1, output);
  } else if (n < 0){
    return sumBelow(n+1, output);
  }
};
//console.log(sumBelow(7)); // 21 - works!
//console.log(sumBelow(-7)); // -21 - works!


// 6. Get the integers in range (x, y). -------------------------------------------------------------------------------------------------
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

/*
I: Two numbers
O: An array with the numbers in between 
C: Recursion
E: Should work for negative numbers too 
*/

//output is an array
var range = (x, y, output=[]) => {
  // edge case if x and y undefined
  if (x === undefined || y === undefined || x - y === 0 || y - x === 0){
    return [];
  }
  //base - once the recursion reaches y, stop
  // one for pos direction and one for neg direction
  if (x < y && output[output.length-1] === y - 1){
    return output;
  } else if (x > y && output[output.length-1] === y + 1){
    return output;
  }
  // can also do: if (x + 1 === y)

  //output - add one to increment low -> high or minus one for high -> low
  if (x < y){
    output.push(x + 1);
    return range (x + 1, y, output);
  } else if (x > y){
    output.push(x - 1);
    return range (x - 1, y, output);
  }
};


// 7. Compute the exponent of a number. -------------------------------------------------------------------------------------------------
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
//
// for negative exponent 5^-2 is the same as 1/5^2

function exponent(base, exp, answer=1){
  //base case //when counter goes down to 0, return answer
  // if input is 0 to begin with, answer = 1
  if (exp === 0){
    return answer;
  }
  // creating the exponent for pos and neg
  if (exp > 0){
    answer *= base;
  } else if (exp < 0){
    answer *= 1/base;
  }
  //recurison for positive, exp counter goes down
  if (exp > 0){
    return exponent(base, exp-1, answer);
  // recursion for negative, exp counter goes up
  } else if (exp < 0){
    return exponent(base, exp+1, answer);
  }
};


// 8. Determine if a number is a power of two. ------------------------------------------------------------------------------------------
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
/*
I: A number
O: A boolean, true if a power of 2, false otherwise

Note from Justin Helpdesk
There are sometimes ways that you can set a default case, and essentially create a while loop. 
You can think about it as "we are going to return true 
as long as we don't encounter a case that requires us to return false."

*/
var powerOfTwo = function(n) {
  // base case - when u keep dividing and it gets to 1, it's a power of 2
 if (n === 1){
    return true;
    // if it's not a whole number or if it's 0, it's not a power of 2
 } else if (!Number.isInteger(n) || n === 0){
   return false;
 }
  //invoke function - change n by dividing by 2
  return powerOfTwo(n/2);
};


// 9. Write a function that accepts a string a reverses it. -----------------------------------------------------------------------------
/*
I: A string
O: The string reversed
*/
var reverse = function(string, output="") {
  //base case
  if (string.length === 0){
    return output;
  }
  // output - add last item in string
  output += string[string.length-1];
  //call self and chop off last letter in string
  return reverse(string.slice(0, string.length-1), output);
};

// 10. Write a function that determines if a string is a palindrome. --------------------------------------------------------------------
var palindrome = function(string) {
  // take input string and remove spaes (edge case) and lowercase it (edge case)
  let revisedString = string.replaceAll(" ", "").toLowerCase();
  
  // base case - sliced down to 1 or 0
  if (revisedString.length === 0 || revisedString.length === 1){
    return true
  }
  
  //recursion
  if (revisedString[0] === revisedString[revisedString.length-1]){
    // cut both ends 
    return palindrome(revisedString.slice(1, revisedString.length-1))
  } else {
    return false;
  }
};



// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
// var modulo = function(x, y) {
  
// };

// 12. Write a function that multiplies two numbers without using the * operator  or ------------------------------------------------------
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').

//base case: y(counter) hits 0
//output - if multiplying by positive, add x (y many times)
         //if multiplying by negative, minus x (y many times)
//recursion - y will be the counter, -1 to go down to 0 and +1 to go up to 0

var multiply = function(x, y, output=0) {
  if (y === 0){
    return output;
  }
  if (y < 0){
    output -= x;
    return multiply(x, y+1, output);
  } else if (y > 0){
    output += x;
    return multiply(x, y-1, output);
  }
};


// // 13. Write a function that divides two numbers without using the / operator  or
// // JavaScript's Math object.
// var divide = function(x, y) {
// };

// // 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// // integers is the greatest integer that divides both x and y with no remainder.
// // Example:  gcd(4,36);  // 4
// // http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// // https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
// var gcd = function(x, y) {
  
// };

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

var compareStr = function(str1, str2) {
  // base case
  if (str1.length === 0 && str2.length === 0){
    // if it reaches this point it must be true
    return true;
  }
  // compare the first of str 1 and str 2 at each recursion
  if (str1[0] === str2[0]){
    // call func w/ 1st letter chopped off
    return compareStr(str1.slice(1), str2.slice(1));
  } else {
    // if at any recursion the letters aren't equal, hit false and stop
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, output=[]){
  // base case
  if (str.length === 0){
    return output;
  } else {
    output.push(str[0]);
  }
  return createArray(str.slice(1), output);
};

// 17. Reverse the order of an array
var reverseArr = function (arr, output=[]) {
  // base case
  if (arr.length === 0){
    return output;
  } else {
    // recursion - push last into output
    output.push(arr[arr.length-1]);
  }
  // call self with last chopped from string - array slice
  return reverseArr(arr.slice(0, arr.length-1), output);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output=[]) {
  // base - stop when array is <length> long
  if (length === 0){
    return output;
  }
  output.push(value);
  return buildList(value, length-1, output);
};
//console.log(buildList(0, 3)); //works!

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count=0) {
  // base case - when whole array sliced off 
  if (array.length === 0){
    return count;
  }
  // compare first index to value - if same add to count
  if (value === array[0]){
    count += 1;
  }
  // recursion with first sliced off
  return countOccurrence(array.slice(1), value, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[]) {
  // base case - og array empty
  if (array.length === 0){
    return output;
  }
  // push + pass in first of array into callback
  output.push(callback(array[0]))
  return rMap(array.slice(1), callback, output);
};

// // 21. Write a function that counts the number of times a key occurs in an object.
// // var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// // countKeysInObj(testobj, 'r') // 1
// // countKeysInObj(testobj, 'e') // 2
// var countKeysInObj = function(obj, key) {
// };

// // 22. Write a function that counts the number of times a value occurs in an object.
// // var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// // countValuesInObj(testobj, 'r') // 2
// // countValuesInObj(testobj, 'e') // 1
// var countValuesInObj = function(obj, value) {
// };

// // 23. Find all keys in an object (and nested objects) by a provided name and rename
// // them to a provided new name while preserving the value stored at that key.
// var replaceKeysInObj = function(obj, key, newKey) {
// };

// // 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// // number is the sum of the previous two.
// // Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// // fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// // Note:  The 0 is not counted.
// var fibonacci = function(n) {
// };

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

//fibonacci sequence is the sum of preceding two numbers
var nthFibo = function(n, fib=[0, 1]) {
  // default param is first two of fibonacci
  // edge case, null for negative n
  if (n < 0){
    return null;
  }
  // if n is 0
  if (n === 0){
    return 0;
  }
  //base - does n exist as an index in fib?
  if (fib.length === n + 1){
    return fib[n];
  }
  //recursion - add two last nums of fib to make next number
  // sum of 0 and 1 is 1 -> [0, 1, 1]
  let newFib = fib[fib.length - 1] + fib[fib.length - 2];
  fib.push(newFib);
  return nthFibo(n, fib);
};


// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output=[]) {
  // base - input array sliced to 0
  if (input.length === 0){
    return output;
  }
  // recursion - push and make first index to uppercase
  output.push(input[0].toUpperCase());
  return capitalizeWords(input.slice(1), output);
};


// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output=[]) {
  // base case - input array sliced to 0
  if (array.length === 0){
    return output;
  }
  // recursion - push and make first letter to uppercase
  output.push(array[0][0].toUpperCase() + array[0].slice(1));
  return capitalizeFirst(array.slice(1), output);
};


// // 28. Return the sum of all even numbers in an object containing nested objects.
// // var obj1 = {
// //   a: 2,
// //   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
// //   c: {c: {c: 2}, cc: 'ball', ccc: 5},
// //   d: 1,
// //   e: {e: {e: 2}, ee: 'car'}
// // };
// // nestedEvenSum(obj1); // 10
// var nestedEvenSum = function(obj) {
// };

// // 29. Flatten an array containing nested arrays.
// // Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
// var flatten = function(arrays) {
// };


// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj={}) {
  // base - string sliced to 0
  if (str.length === 0){
    return obj;
  }
  // key is letter in str
  let key = str[0];
  // if key doesn't exist, make it
  if(!obj[key]) {
    obj[key] = 1;
    // if it does, add one to value
  } else {
    obj[key] += 1;
  }
  return letterTally(str.slice(1), obj);
};
console.log(letterTally('potato'));


// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output=[]){
  // base
  if (list.length === 0){
    return output;
  }
  //recursion
  if (list[0] !== output[output.length-1]){
    output.push(list[0]);
  }
  return compress(list.slice(1), output);
};

console.log(compress([1, 2, 2, 3, 4, 4, 5, 5, 5])); 


// // 32. Augment every element in a list with a new value where each element is an array
// // itself.
// // Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
// var augmentElements = function(array, aug) {
// };

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, output=[]) {
  // base case - array sliced to 0
  if (array.length === 0){
    return output;
  }
  // if first in array is not 0 - push
  if (array[0] !== 0) {
    output.push(array[0]);
    // else if array[0] is 0 and last in output is NOT 0
  } else if (array[0] === 0 && output[output.length - 1] !== 0){
    output.push(array[0]);
  } 
  return minimizeZeroes(array.slice(1), output)
};


// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, output=[]) {
  // base case - array sliced to 0
  if (array.length === 0){
    return output;
  }
  // even index is pos, odd index is neg
   // if the last index in output is even, push negative
  if (output.indexOf(output[output.length-1]) % 2 === 0){
    output.push(-Math.abs(array[0]));
   // if the last index in output is odd, push positive
  } else if (output.indexOf(output[output.length-1]) % 2 !== 0){
    output.push(Math.abs(array[0]));
  }
  return alternateSign(array.slice(1), output);
};


// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, output="") {
  // base case - str sliced to 0
  if (str.length === 0){
    return output;
  }
  // make numbers 0-9 array
  let digitStr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  // if first index is not a number, add str as is
  if (!Number(str[0])){
    output += str[0];
    // else it is a number, replace with corresponding in digitArr
  } else {
    output += digitStr[str[0]];
  }
  // recursion with first sliced
  return numToText(str.slice(1), output);
};
console.log(numToText("I have 9 dogs and 3 ponies"));


// *** EXTRA CREDIT *** ------------------------------------------------------------------

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------