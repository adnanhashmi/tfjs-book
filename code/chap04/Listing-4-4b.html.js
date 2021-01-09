function runCode() {
   // Define a sequential neural network model
   const model = tf.sequential();
   // Define the first layer
   model.add(tf.layers.dense({inputShape: [4], units: 5, activation: 'relu'}));
   // Define the second layer
   model.add(tf.layers.dense({units: 3, activation: 'softmax'}));
   // Display model summary
   model.summary();
}