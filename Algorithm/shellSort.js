function shellSort(arr) {
  var len = arr.length,
      temp,
      gap = 1;
      while (gap < len/3) {
        gap = gap*3 + 1;
      }
      for (gap; gap > 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
          temp = arr[i];
          for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
            arr[j + gap] = arr[j];
          }
          arr[j + gap] = temp;
        }
      }
      return arr;
}

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

console.log(shellSort(arr)); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
