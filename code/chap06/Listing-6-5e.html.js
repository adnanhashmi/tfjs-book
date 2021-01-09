var earthquakeReadings = [5.9, 5.6, 7.2, 6.5, 6.3, 6.7, 5.5, 6, 6.2, 5.7];

function calculateAverage(arrayToUse) {
    return arrayToUse.reduce((a,b)=>a+b)/arrayToUse.length
}

// Calls the reduce function on an array
function performReduceOperationOnArray() {
    alert("Average Reading: " + calculateAverage(earthquakeReadings).toFixed(2));
}
