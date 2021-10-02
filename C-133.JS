img = ""
objects = [];
model_status = ""

function preload(){
    img = loadImage("dog_cat.jpg")
}
function draw(){
    if(model_status != ""){
        COCOSSD.detect(img, gotResults)
    for(i = 0; i <objects.length; i++){
    document.getElementById("status").innerHTML = "Status: Objects Detected!"
    document.getElementById("number_of_objects").innerHTML = "Number of Objects Detected are" + objects.length

    fill("blue")
    percent = floor(objects[i].confidence * 100)
    text(objects[i].label + "" + percent + "%" , objects[i].x + 15 , objects[i].y + 15)
noFill()
stroke("blue")
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height )
    }
    
   
}
}
function setup (){
    canvas = createCanvas(620, 460)
    canvas.center()
    COCOSSD = ml5.objectDetector("cocossd", modelLoaded)
    
}
function modelLoaded(){
console.log("Model Loaded")

status = true;
}
function gotResults(error, results){
    if(error){
console.error(error)
    }
    else{
        console.log(results)
    }
}