async function loadTruncatedMobileNet() {
    const mobilenet = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');
    
        const layer = mobilenet.getLayer('conv_pw_13_relu');
        return tf.model({
            inputs: mobilenet.inputs,
            outputs: layer.output
        });
}