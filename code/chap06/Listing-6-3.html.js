// Convert data to tensors
async function loadDataAndConvertToTensors() {
    const trainingData = {
       columnA: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
       columnB: [20, 40, 60, 80, 100, 120, 140, 160, 180, 200]
    };
 
    const testData = {
       columnA: [1, 2, 3, 4, 5],
       columnB: [20, 40, 60, 80, 100]
    };
 
    // Convert training data to tensors
    const trainingDataTensors = {
       columnA: tf.tensor2d(trainingData.columnA, [10, 1]),
       columnB: tf.tensor2d(trainingData.columnB, [10, 1])
    };
 
    // Convert test data to tensors
    const testDataTensors = {
       columnA: tf.tensor2d(testData.columnA, [5, 1]),
       columnB: tf.tensor2d(testData.columnB, [5, 1])
    };
 };
 