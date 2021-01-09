function runCode() {
   // Define a tensor
   let val = tf.tensor([25, 29, 31, 33, 37]);
   // Clone the tensor
   let val2 = val.clone();
   document.getElementById('message').innerHTML = val2;
}