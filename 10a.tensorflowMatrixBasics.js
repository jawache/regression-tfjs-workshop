/**
 * Let's cover the basics of tensorflow.js matrix multiplication
 */

// Create a 2x2 matrix
var a = tf.tensor([[3, 8], [4, 6]]);
console.log(a.rank);
console.log(a.shape);

// Or you can provide a flat array and define a shape
var a = tf.tensor([3, 8, 4, 6], [2, 2]);
console.log(a.rank);
console.log(a.shape);

// You can transpose a matrix
a.print();
a.transpose().print();

// Tensors are read-only, so doesn't affent a
a.print();

// Addition
var b = tf.tensor([[4, 0], [1, -9]]);

a.add(b).print();

// Broadcasting
var c = tf.tensor([[4]]);
a.add(c).print();

var c = tf.tensor(4);
a.add(c).print();

// // Substraction
// a.sub(b).print();

// // Division
// // var a = tf.tensor([[2, 2], [2, 2]]);
// // var b = tf.tensor([[1, 2], [3, 4]]);
// a.div(b).print();

// // Multiply by a Constant
// b.mul(2).print();

// // Multiply by another matrix (element wise multiplication)
// var a = tf.tensor([[1, 2], [3, 4]]);
// var b = tf.tensor([[2, 3], [4, 5]]);
// a.mul(b).print();

// // Matrix multiplication
// var a = tf.tensor([[1, 2, 3], [4, 5, 6]]);
// a.print();
// var b = tf.tensor([[7, 8], [9, 10], [11, 12]]);
// b.print();
// a.matMul(b).print();
