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
let aa = new Point(1, 2)
let bb = aa.constructor
console.log(new Point() instanceof Point)




let inorderTraversal = function (root, array = []) {
    if (root) {
        inorderTraversal(root.left, array);
        array.push(root.val);
        inorderTraversal(root.right, array);
    }
    return array;
};
let da = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: null,
        right: {
            val: 3
        },
        
    }
}
let ccd = [1,2]
let zx = inorderTraversal(da)
console.log(zx)

class Adf {
    constructor() {
        console.log('112')
        return 12
    }
    aa() {
        console.log("执行了22")
    }
}
let test = (new Adf).aa()
console.log(test)



