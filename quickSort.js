function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const leftArray = [];
    const rightArray = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArray.push(arr[i]);
      } else {
        rightArray.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
  }
  
  // Example usage:
  const array = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = quickSort(array);
  console.log(sortedArray);
  