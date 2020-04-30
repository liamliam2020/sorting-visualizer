export function getRadixSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  radixSortHelper(array, array.length, animations);
  return animations;
}

function radixSortHelper(array, length, animations) {
  let maxVal = getMax(array, length);
  for (let i = 1; maxVal / i > 0; i *= 10) {
    countingSort(array, length, animations);
  }
}

function getMax(array, length) {
  let max = array[length - 1];
  for (let i = 0; i < length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function countingSort(array, length, exp) {
  //count = [];
}
