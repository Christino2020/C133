img = ""
status_model = ""

function preload(){
    img = loadImage('dog_cat.jpg')
}
function setup(){
    canvas = createCanvas(640, 420)
    canvas.center()
    object_detector = ml5.objectDetector('cocossd', modelLoaded)
}
function modelLoaded(){
    console.log("Model Loaded!")
    status_model = true;
    object_detector.detect('img', gotResults)
}
function gotResults(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
    }
}
function draw(){
    image(img, 0, 0, 640, 420)

    fill("red")
    noFill()
    stroke("red")
    rect(30, 60, 450, 350)
    text("Dog", 45, 75)

    
    fill("blue")
    noFill()
    stroke("blue")
    rect(300, 90, 270, 320)
    text("Cat", 320, 120 )
}