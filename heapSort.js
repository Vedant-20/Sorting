function heapSort(arr) {
    const n = arr.length;
  
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // Extract elements one by one from the heap
    for (let i = n - 1; i > 0; i--) {
      // Move the current root (the largest element) to the end
      const temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
  
      // Call heapify on the reduced heap
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  function heapify(arr, n, i) {
    let largest = i;
    const leftChild = 2 * i + 1;
    const rightChild = 2 * i + 2;
  
    // If left child is larger than root
    if (leftChild < n && arr[leftChild] > arr[largest]) {
      largest = leftChild;
    }
  
    // If right child is larger than largest so far
    if (rightChild < n && arr[rightChild] > arr[largest]) {
      largest = rightChild;
    }
  
    // If the largest element is not the root
    if (largest !== i) {
      // Swap the largest element with the root
      const temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
  
      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
    }
  }
  
  // Example usage:
  const array = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = heapSort(array);
  console.log(sortedArray);
  