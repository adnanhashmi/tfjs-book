function runCode() {
   let val = tf.tensor([13, 25, 34, 49, 57]);
   document.getElementById('message').innerHTML = val.onesLike();
}