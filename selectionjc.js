function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[minIndex], array[i]] = [array[i], array[minIndex]];
  }
  console.log(array);
}

selectionSort([2, 58, 69, 47, 568, 147, 1058, 22, 3, 5, 1, 5847, 65, 87]);
