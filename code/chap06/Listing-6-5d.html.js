var earthquakeReadings = [5.9, 5.6, 7.2, 6.5, 6.3, 6.7, 5.5, 6, 6.2, 5.7];

// Calls the map function on an array
function performMapOperationOnArray() {
    let rounded = earthquakeReadings.map(Math.round);
    let truncated = earthquakeReadings.map(Math.trunc);

    alert("Rounded Readings: " + rounded);
    alert("Truncated Readings: " + truncated);
}
