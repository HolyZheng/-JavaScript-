// 定义一个函数用于交换
function swap (array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort (arr) {
  let minIndex;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {  // 对未排序的序列进行循环，找出最小元素。
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);                     // 最小元素与放如排好序的序列末尾。
  }
  return arr;
}

let arr = [1,2,8,4,3,6,10];

selectionSort(arr)   // 1，2，3，4，6，8，10