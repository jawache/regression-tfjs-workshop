/**
 * Let's cover the basics of tensorflow.js matrix multiplication
 */

var a = tf.tensor([1, 2, 3]);
console.log(a.rank);
console.log(a.shape);
a.print();

// Can use type to make it clearer
var a = tf.tensor1d([1, 2, 3]);
console.log(a.rank);
console.log(a.shape);
a.print();

// Also using types catches errors
// var a = tf.tensor1d([[1, 2, 3]]);
// console.log(a.rank);
// console.log(a.shape);
// a.print();

// Errors out - shape is wrong
// var a = tf.tensor([[1, 2], [3]]);
// console.log(a.rank);
// console.log(a.shape);
// a.print();

// Add a value to make it work
var a = tf.tensor([[1, 2], [3, 4]]);
console.log(a.rank);
console.log(a.shape);
a.print();

// Or you can provide a flat array and define a shape
var a = tf.tensor([1, 2, 3, 4], [2, 2]);
console.log(a.rank);
console.log(a.shape);
a.print();

// QUIZ - Make a rank 1 tensor of 4,5,6, then a rank 2 tensor of [4],[5],[6], then a rank 3 tensor of [[4]],[[5]],[[6]]

// ANS: Rank 1
var a = tf.tensor([4, 5, 6]);
var a = tf.tensor1d([4, 5, 6]);
var a = tf.tensor([4, 5, 6], [3]);
var a = tf.tensor([4, 5, 6], [3]);
console.log(a.rank);
console.log(a.shape);
a.print();

// ANS: Rank 2
var a = tf.tensor2d([[4], [5], [6]]);
var a = tf.tensor2d([4, 5, 6], [3, 1]);
console.log(a.rank);
console.log(a.shape);
a.print();

// ANS: Rank 3
var a = tf.tensor3d([[[4]], [[5]], [[6]]]);
var a = tf.tensor3d([4, 5, 6], [3, 1, 1]);
console.log(a.rank);
console.log(a.shape);
a.print();

//===========================================================//

// You can transpose a matrix
var b = a.transpose();
b.print();
console.log(b.rank);
console.log(b.shape);

// Addition
var a = tf.tensor([3, 8, 4, 6], [2, 2]);
var b = tf.tensor([[4, 0], [1, -9]]);

a.add(b).print();

// Broadcasting
var c = tf.tensor(4);
a.add(c).print();

var c = tf.tensor([[4]]);
a.add(c).print();

// Subtraction
a.sub(b).print();

// Division
var a = tf.tensor([[2, 2], [2, 2]]);
var b = tf.tensor([[1, 2], [3, 4]]);
a.div(b).print();

// QUIZ - Take 2 from every value in the 3d array you created before
{
  var a = tf.tensor3d([4, 5, 6], [3, 1, 1]);
  var b = tf.tensor3d([2, 2, 2], [3, 1, 1]);
  a.sub(b).print();
}

{
  var a = tf.tensor3d([4, 5, 6], [3, 1, 1]);
  a.sub(tf.tensor(2)).print();
}

{
  var a = tf.tensor3d([4, 5, 6], [3, 1, 1]);
  a.sub(2).print();
}

//===========================================================//
var a = tf.tensor([3, 8, 4, 6], [2, 2]);
var b = tf.tensor([[4, 0], [1, -9]]);

// Multiply by a Constant
b.mul(2).print();

// Multiply by another matrix (element wise multiplication), shape has to be the same
var a = tf.tensor([[1, 2], [3, 4]]);
var b = tf.tensor([[2, 3], [4, 5]]);
a.mul(b).print();

// Matrix multiplication, shapes must match a rule (rows in first === columns in second)
var a = tf.tensor([[1, 2, 3], [4, 5, 6]]);
a.print();
var b = tf.tensor([[7, 8], [9, 10], [11, 12]]);
b.print();
a.matMul(b).print();
a.dot(b).print();

// QUIZ - Multiply both these matrices using element wise and dot
/*
4, 5, 6  *  2
            3
            4
*/
{
  var a = tf.tensor([4, 5, 6]);
  console.log(a.rank);
  console.log(a.shape);
  // var b = tf.tensor([[2], [3], [4]]);
  var b = tf.tensor([2, 3, 4], [3, 1]);
  console.log(b.rank);
  console.log(b.shape);
  b.print();
  a.mul(b).print();
  a.dot(b).print();
}
