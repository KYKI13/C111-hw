
camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_img" src= "' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RWhv-MWTG/model.json', modeloaded);

function modeloaded() {
    console.log("model loded!")
}
 
function check(){
    img = document.getElementById('capture_img');
    Classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if( error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}