var earthquakeReadings = [5.9, 5.6, 7.2, 6.5, 6.3, 6.7, 5.5, 6, 6.2, 5.7];

function checkHighEarthquake(earthquakeReading) {
  return earthquakeReading > 6;
}

// Calls the filter function to remove an element from an array
function performRemovalFromArray() {
    alert("Earthquake Readings: " + earthquakeReadings.filter(checkHighEarthquake));
}
