function check(y) {
    if (y == 0 || y == -0 || y == null || y == false || y == undefined || y == NaN || y == '') {
      return false;
    } else {
      return true;
    }
  }
  

console.log(check(null))
console.log(check('jj'))
console.log(check())
console.log(check(9))