// Convert image to tensor
function convertImageToTensor() {
    let img = document.getElementById('image-element'); // get image HTML element

    let tensorData = tf.browser.fromPixels(img)	        // covert to tensor
    alert(tensorData);                                  // display tensor in alert dialog
 }
 