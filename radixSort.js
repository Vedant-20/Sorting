function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  function countingSortForRadix(arr, exp) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const countingArray = new Array(10).fill(0);
  
    // Count the occurrences of each digit at the current radix position
    for (let i = 0; i < n; i++) {
      const digit = Math.floor(arr[i] / exp) % 10;
      countingArray[digit]++;
    }
  
    // Modify the counting array to keep track of cumulative counts
    for (let i = 1; i < 10; i++) {
      countingArray[i] += countingArray[i - 1];
    }
  
    // Place the elements in the output array in sorted order
    for (let i = n - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[countingArray[digit] - 1] = arr[i];
      countingArray[digit]--;
    }
  
    // Copy the sorted output array back to the original array
    for (let i = 0; i < n; i++) {
      arr[i] = output[i];
    }
  }
  
  function radixSort(arr) {
    const max = getMax(arr);
  
    // Perform counting sort for each digit, starting from the least significant digit
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
      countingSortForRadix(arr, exp);
    }
  
    return arr;
  }
  
  // Example usage:
  const array = [170, 45, 75, 90, 802, 24, 2, 66];
  const sortedArray = radixSort(array);
  console.log(sortedArray);
  