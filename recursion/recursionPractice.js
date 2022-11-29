/* power

Write a function called power which accepts a base and an exponent. The function should return 
the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - 
do not worry about negative bases and exponents. 

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

factorial

Write a function factorial which accepts a number and returns the factorial of that number. A factorial 
is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, 
because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

productOfArray

Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
*/

const recursion = {
  power: function (base, exponent){
    if(exponent === 0) return 1;
    if(exponent === 1) return base;
    return base * this.power(base, exponent - 1);
  },
  factorial: function (num) {
      if(num == 1) return 1;
      return num * this.factorial(num-1);
   },
  productOfArray: function(arr) {
    const productOfTwo = arr[0] * arr[1];
    if(arr.length === 2) {
        return productOfTwo;
    }
    arr.splice(0, 2, productOfTwo);
    return this.productOfArray(arr);
  }
}


module.exports = recursion;