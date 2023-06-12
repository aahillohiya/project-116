function preload() {
  nose = loadImage('https://i.postimg.cc/bJ8dbvvb/moustache.jpg');

}

function setup() {
  canvas = createCanvas(310,310);
  canvas.center();

  video = createCapture(VIDEO);
  video.size(310,310);
  video.hide();

  poseNet = ml5.poseNet(video,modelLoaded);

  poseNet.on('pose',gotPoses);

}

function take_snapshot() {
    save('PROJECT-114.jpg');
}

function modelLoaded() {
  console.log("Model is Loaded");
}

function gotPoses(results) {
    console.log(results);
    if(results.length>0){
      nose_x = results[0].pose.nose.x-10;
      nose_y = results[0].pose.nose.y-10;
    }
}

function draw() {
  image(video,0,0,300,300);
  fill("red");
  image(nose,nose_x,nose_y,30,30)
}