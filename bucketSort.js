function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) {
      return arr;
    }
  
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
  
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = new Array(bucketCount);
    for (let i = 0; i < bucketCount; i++) {
      buckets[i] = [];
    }
  
    // Place elements into the buckets based on their range
    for (let i = 0; i < arr.length; i++) {
      const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
      buckets[bucketIndex].push(arr[i]);
    }
  
    // Sort elements within each bucket (using insertion sort or another sorting algorithm)
    const sortedArray = [];
    for (let i = 0; i < bucketCount; i++) {
      insertionSort(buckets[i]);
      sortedArray.push(...buckets[i]);
    }
  
    return sortedArray;
  }
  
  // Insertion sort for sorting elements within a bucket (alternative sorting algorithm can be used)
  function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = key;
    }
  }
  
  // Example usage:
  const array = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = bucketSort(array);
  console.log(sortedArray);
  