


// 01. Check if a Year is a Leap Year
/**
 * @param {number} year
 * @return {boolean}
 */
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// 02. Generate Fibonacci Sequence Up to N Terms
/**
 * @param {number} n
 * @return {number[]}
 */
function generateFibonacci(n) {
  if (n <= 0) return [];
  const result = [0];
  if (n === 1) return result;
  result.push(1);
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

// 03. Calculate the Greatest Common Divisor (GCD)
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findGCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

// 04. Calculate the Least Common Multiple (LCM)
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findLCM(a, b) {
  return Math.abs(a * b) / findGCD(a, b);
}

// 05. Check if a Number is Prime
/**
 * @param {number} num
 * @return {boolean}
 */
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// 06. Merge Two Sorted Arrays into One Sorted Array
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }
  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);
  return result;
}

// 07. Find the Median of an Unsorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
function findMedian(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
  return sorted[mid];
}

// 08. Find the Second Largest Number in an Array
/**
 * @param {number[]} nums
 * @return {number|null}
 */
function findSecondLargest(nums) {
  const unique = [...new Set(nums)];
  if (unique.length < 2) return null;
  unique.sort((a, b) => b - a);
  return unique[1];
}

// 09. Find Most Frequent Element (Mode) in an Array
/**
 * @param {Array} arr
 * @return {*}
 */
function findMode(arr) {
  const freq = new Map();
  let mode = arr[0];
  let maxCount = 0;
  for (const item of arr) {
    const count = (freq.get(item) || 0) + 1;
    freq.set(item, count);
    if (count > maxCount) {
      maxCount = count;
      mode = item;
    }
  }
  return mode;
}

// 10. Natural Sorting of Strings with Embedded Numbers
/**
 * @param {string[]} arr
 * @return {string[]}
 */
function naturalSort(arr) {
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
  return [...arr].sort(collator.compare);
}

// ---------------------------------------------------------
// Quick manual tests (based on expected input/output above)
// ---------------------------------------------------------
console.log(isLeapYear(2024)); // true
console.log(generateFibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(findGCD(48, 18)); // 6
console.log(findLCM(12, 18)); // 36
console.log(isPrime(29)); // true
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(findMedian([7, 1, 3, 4, 9])); // 4
console.log(findSecondLargest([10, 20, 4, 45, 99, 99])); // 45
console.log(findMode([1, 3, 3, 2, 1, 3, 4])); // 3
console.log(naturalSort(["file10.txt", "file2.txt", "file1.txt"])); // ["file1.txt", "file2.txt", "file10.txt"]

module.exports = {
  isLeapYear,
  generateFibonacci,
  findGCD,
  findLCM,
  isPrime,
  mergeSortedArrays,
  findMedian,
  findSecondLargest,
  findMode,
  naturalSort,
};