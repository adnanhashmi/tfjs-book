// Convert image to tensor and perform operations
function convertImageToTensor() {
    let img = document.getElementById('image-element');
 
    let tensorData = tf.browser.fromPixels(img, 4)	// covert/use 4 channels
         .resizeNearestNeighbor([100, 100])         // change image size
         .expandDims()			                    // expand tensor rank
         .toFloat()		    	                    // cast to float32
         .reverse(); 			                    // reverse the tensor
    alert(tensorData);                              // display tensor in alert dialog
 } 