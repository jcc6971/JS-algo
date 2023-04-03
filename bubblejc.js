function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  console.log(array);
}

bubbleSort([2, 58, 69, 47, 568, 147, 1058, 22, 3, 5, 1, 5847, 65, 87]);
