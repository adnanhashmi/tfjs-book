function runCode() {
   // Define a functional neural network model
   const input = tf.input({shape: [4]});
   // Define the first layer
   const layer1 = tf.layers.dense({units: 5, activation: 'relu'}).apply(input);
   // Define the second layer
   const layer2 = tf.layers.dense({units: 3, 
                  activation: 
                  'softmax'}).apply(layer1);

   // Create the model
   const model = tf.model({inputs: input, outputs: layer2});
   // Display model summary
   model.summary();
}