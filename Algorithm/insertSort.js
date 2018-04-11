let arr = [5,3,2,6,7,10,1];  // 进行小到达排序

function InsertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let curr = arr[i];                    // 要执行插入操作的元素
    let j = i;                            // 从i开始往回遍历
    while (j > 0 && arr[j-1] > curr) {   
// 不断跟curr元素进行比较，大于curr的往后退一位，最终给curr腾出一个插入的位置
      arr[j] = arr[j-1];
      j--;
    }
    arr[j] = curr                         // curr插入到合适的位置中
  }
  return arr;
}

console.log(InsertionSort(arr)); // 1,2,3,5,6,7,10