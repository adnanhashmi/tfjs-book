// Loading a CSV file 
async function loadCsvData() {
   const csvUrl = 'https://url/';
   const csvFileName = 'fileName.csv';
   const csvFileUrl = csvUrl + csvFileName;

   const csvDataset = tf.data.csv(csvFileUrl, {
      hasHeader: true,
      columnConfigs: {
         predictionLabelName: {
            isLabel: true
         }
      }
   });
}
