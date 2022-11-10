const bubbleSort = {
  basic: function (arr) {
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
  }
}

module.exports = bubbleSort;