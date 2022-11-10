const bubbleSort = {
  basic: function (arr) {	
    for (var i = arr.length; i > 0; i--) {
      for (var j = 0; j < i - 1; j++) {
        if (arr[j + 1] < arr[j]) {
          var temp = arr[j];
          arr[j] = arr[j + 1]
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
}

module.exports = bubbleSort;