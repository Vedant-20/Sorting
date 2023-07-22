function countingSort(arr) {
    const n = arr.length;
    
    // Find the maximum element in the array to determine the range for counting array
    let max = arr[0];
    for (let i = 1; i < n; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    // Initialize the counting array with zeros
    const countingArray = new Array(max + 1).fill(0);
  
    // Count the occurrences of each element in the input array
    for (let i = 0; i < n; i++) {
      countingArray[arr[i]]++;
    }
  
    // Modify the counting array to keep track of cumulative counts
    for (let i = 1; i <= max; i++) {
      countingArray[i] += countingArray[i - 1];
    }
  
    // Create the output array
    const output = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
      output[countingArray[arr[i]] - 1] = arr[i];
      countingArray[arr[i]]--;
    }
  
    return output;
  }
  
  // Example usage:
  const array = [4, 2, 2, 8, 3, 3, 1];
  const sortedArray = countingSort(array);
  console.log(sortedArray);
  