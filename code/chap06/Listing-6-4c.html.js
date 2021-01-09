function pageLoaded() {
    Webcam.set({
        width: 640,
        height: 480,
        image_format: 'jpeg',
        jpeg_quality: 100
    });
    Webcam.attach('#webcam');
}

// Convert webcam image to tensor
function convertWebcamImageToTensor() {
    let img = document.getElementById('imageElement');  // get image HTML element

    let tensorData = tf.browser.fromPixels(img)	        // covert to tensor
    alert(tensorData);                                  // display tensor in alert dialog
    document.getElementById('message').innerHTML = 'Code executed successfully.';
 }
 