function runCode() {
   let val = tf.range(95, 163, 3);
   document.getElementById('message').innerHTML = val + "<br />Size of tensor: " + val.size;
}