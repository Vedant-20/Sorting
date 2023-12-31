function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Last i elements are already in place, so we can reduce the inner loop iterations
    for (let j = 0; j < n - i - 1; j++) {
      // Swap elements if the current element is greater than the next element
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(array);
console.log(sortedArray);
