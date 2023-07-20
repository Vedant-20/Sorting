function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, mid);
    const rightArray = arr.slice(mid);
  
    return merge(mergeSort(leftArray), mergeSort(rightArray));
  }
  
  function merge(left, right) {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return mergedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  // Example usage:
  const array = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = mergeSort(array);
  console.log(sortedArray);
  