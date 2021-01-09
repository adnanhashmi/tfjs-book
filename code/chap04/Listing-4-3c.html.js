function runCode() {
    try {
        let scalar = tf.scalar(11.55);
        let rank1 = tf.tensor1d([1, 2, 3, 4, 5]);
        let rank2 = tf.tensor2d(tf.range(1, 26, 1).toString(), [5, 5]); //tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],[5, 5]);
        // let rank3 = tf.tensor3d([1, 2, 3, 4, 5]);
        // let rank4 = tf.tensor4d([1, 2, 3, 4, 5]);
        // let rank5 = tf.tensor5d([1, 2, 3, 4, 5]);
        // let rank6 = tf.tensor6d([1, 2, 3, 4, 5]);

        document.getElementById('message').innerHTML = 'TENSORS <br />' + 
                                        'Scalar: ' + scalar + ', Shape: ' + scalar.shape + '<br />' +
                                        'Rank 1: ' + rank1 + ', Shape: ' + rank1.shape + '<br />' +
                                        'Rank 2: ' + rank2 + ', Shape: ' + rank2.shape + '<br />';
                                        //    'Rank 3: ' + rank3 + ', Shape: ' + rank3.shape + '<br />' +
                                        //    'Rank 4: ' + rank4 + ', Shape: ' + rank4.shape + '<br />' +
                                        //    'Rank 5: ' + rank5 + ', Shape: ' + rank5.shape + '<br />' +
                                        //    'Rank 6: ' + rank6 + ', Shape: ' + rank6.shape;
    }
    catch (err) {
        document.getElementById('message').innerHTML = 'ERROR: ' + err;
    }
 }