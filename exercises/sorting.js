const sorting = {
  bubbleSort: function (arr) {
    var swap;
    for (var i = arr.length; i > 0; i--) {
      swap = false;
      for (var j = 0; j < i - 1; j++) {
        if (arr[j + 1] < arr[j]) {
          var temp = arr[j];
          arr[j] = arr[j + 1]
          arr[j + 1] = temp;
          swap = true;
        }
      }
      if(!swap) break
    }
    return arr;
  },
  selectionSort: function(arr) {
    for(var i = 0; i < arr.length; i++) {
      var minIndex = i;
      for(var j = i + 1; j < arr.length; j++) {
      }
      if(arr[j] < arr[minIndex]) minIndex = j;
      if(i !== minIndex) {
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp
      }
    }
    return arr;
  },
  insertionSort: function(arr) {
    for(var i = 1; i < arr.length; i++) {
      for(var j = i - 1; j >= 0; j--) {
        if(arr[i] < arr[j] && arr[i] > arr[j-1]) {
          arr.splice(j, 0, arr.splice(arr[i],1));
          break;
        }
      }
    }
    return arr;
  },
  merge: function(arr1, arr2) {
    // merge two sorted arrays
    var i = 0;
    var j = 0;
    var merged = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
    while(i < arr1.length) {
      merged.push(arr1[i]);
      i++
    }
    while(j < arr2.length) {
      merged.push(arr2[j]);
      j++
    }

    return merged;
  },
  mergeSort: function(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = this.mergeSort(arr.slice(0,mid));
    let right = this.mergeSort(arr.slice(mid));
    return this.merge(left, right);
  }
}

module.exports = sorting;