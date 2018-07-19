function shellSort(arr) {
  var len = arr.length,
      curr,
      gap = 1;
      while (gap < len/3) {
        gap = gap*3 + 1;
      }
      for (gap; gap > 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
          curr = arr[i];
          var j = i;
          while (j >= 0 && arr[j - gap] > curr) {
            arr[j] = arr[j - gap];
            j-=gap;
          }
          arr[j] = curr;
        }
      }
      return arr;
}

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

console.log(shellSort(arr)); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
