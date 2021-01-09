function runCode() {
   try {
      // Define a variable value
      let val = tf.variable(tf.tensor([50, 100, 150, 200]));
      // the following statement generates an error
      val.assign(tf.tensor([450, 500, 550]));

      // this statement does not get executed
      document.getElementById('message').innerHTML = 'Final Value: ' + val;
   }
   catch(err) {
      // the statements in the catch block get executed when an error occurs
      document.getElementById('message').innerHTML = 'ERROR: ' + err.message;
   }
}
