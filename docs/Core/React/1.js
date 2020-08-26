class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      console.log(22)
      return 222333
    }
  
    toString() {
      return '(' + this.x + ',' + this.y + ')';
    }
  }


// function Point(x, y) {
//     this.x = x;
//     this.y = y
// }
// Point.prototype.constructor = function() {
//     console.log(11)
//     return 111
// }
  let aa = new Point(1,2)
  let bb = aa.constructor
  console.log(new Point() instanceof Point)