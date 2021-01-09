function runCode() {
   let realVal = tf.tensor1d([5.23, 7.51]);
   let imagVal = tf.tensor1d([9.35, 1.86]);
   let complexVal = tf.complex(realVal, imagVal);
   document.getElementById('message').innerHTML = complexVal;
}