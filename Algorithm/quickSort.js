function partition(arr, left ,right) {   // 分区操作
  var pivot = left,                      // 设定基准值（pivot）,即以最左元素为主元
      index = pivot + 1;
  for (var i = left + 1; i <= right; i++) {
      if (arr[i] < arr[pivot]) {
          swap(arr, i, index);
          index++;
      }        
  }
  swap(arr, pivot, index - 1);          // 最后把主元放回正确位置
  return index-1;
}


function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, left, right) {
  var len = arr.length,
      partitionIndex;

  if (left < right) {
      partitionIndex = partition(arr, left, right);
      quickSort(arr, left, partitionIndex-1);
      quickSort(arr, partitionIndex+1, right);
  }
  return arr;
}

let arr = [1,6,3,8,5,0,7]

console.log(quickSort(arr, 0, 6))     // 0，1，3，5，6，7，8