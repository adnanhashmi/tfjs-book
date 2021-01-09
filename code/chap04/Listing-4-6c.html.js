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

   // Make a prediction
   let result = model.predict(tf.ones([8, 10]), {batchSize: 4})

   alert("Prediction completed.");
   document.getElementById('message').innerHTML = result;
}