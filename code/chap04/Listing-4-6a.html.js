function runCode() {
   // Define the model
   const model = tf.sequential({
      layers: [tf.layers.dense({units: 1, inputShape: [10]})]
   });

   // Compile the mode
   model.compile({optimizer: 'sgd', loss: 'meanSquaredError', metrics: ['mse']});

   // Train the model
   model.fit(tf.ones([8, 10]), tf.ones([8, 1]), {
      batchSize: 1,
      epochs: 3
   });

   alert("Training completed.");
}