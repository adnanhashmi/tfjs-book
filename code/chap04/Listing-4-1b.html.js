function runCode() {
   // Define a variable value
   let val = tf.variable(tf.tensor([50, 100, 150]));
   val.assign(tf.tensor([450, 500, 550]));

   document.getElementById('message').innerHTML = 'Final Value: ' + val;
}
