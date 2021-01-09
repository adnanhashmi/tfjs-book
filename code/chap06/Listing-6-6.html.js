var csvDataset;

// Loading a CSV file 
async function loadCsvData() {
   const csvUrl = 'dataset/';
   const csvFileName = 'disaster-data-1.csv';
   const csvFileUrl = csvUrl + csvFileName;

   csvDataset = tf.data.csv(csvFileUrl, {
      hasHeader: true
   });
   //alert((await csvDataset.columnNames())[0]);
   let df = new dfd.DataFrame(csvDataset, { columns: csvDataset.columnNames });
   alert(df);
}

function analyzeData() {
   loadCsvData().then(function() {
      //alert('A');
      
      
   }).catch(err => {
      console.log(err);
      alert(err);
  });
}
