function insertionSort(arr) {
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while ((j > 0, arr[j] < arr[j - 1])) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
}

const array = [5, 2, 9, 1, 5, 6];
console.log("Sorted Array:", insertionSort(array));
