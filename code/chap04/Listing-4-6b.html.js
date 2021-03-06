function runCode() {
   const array1 = [
      [0.41804, 0.52203, 0.25374, 0.70718, 0.7418],
      [0.65186, 0.10075, 0.91624, 0.13423, 0.50037],
      [0.48045, 0.84411, 0.53332, 0.4084, 0.7637],
      [0.86752, 0.27962, 0.52211, 0.54758, 0.49345],
      [0.56164, 0.45481, 0.8307, 0.48488, 0.40333],
      [0.48509, 0.58096, 0.63123, 0.53886, 0.58651]      
   ];
   const array2 = [98, 82, 94, 42, 22];

   // Convert arrays to datasets
   const dataset1 = tf.data.array(array1);
   const dataset2 = tf.data.array(array2);

   // Combine datasets, create sample batches, and shuffle the data
   const input = tf.data.zip({xs: dataset1, ys: dataset2}).batch(6).shuffle(5);
   
   // Define the model
   const model = tf.sequential({
      layers: [tf.layers.dense({units: 1, inputShape: [9]})]
   });

   // Compile the model
   model.compile({optimizer: 'sgd', 
                  loss: 'meanSquaredError'});
   
   // Train the model
   model.fitDataset(input, {
      epochs: 4
   });

   alert("Training completed.");
}