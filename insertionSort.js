function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;
  
      // Shift elements greater than the key to the right
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = key;
    }
  
    return arr;
  }
  
  // Example usage:
  const array = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = insertionSort(array);
  console.log(sortedArray);
  