noseX=0;
noseY=0;


function preload() {
    clown_nose = loadImage('https://i.postimg.cc/zXrBtLGG/download-11-removebg-preview.png')
}  

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    tint_color = "";


    poseNet = ml5.poseNet(video, modalLoded);
    poseNet.on('pose', gotPoses);
}

function modalLoded() {
    console.log('poseNet Is Initialized');
    
}

function draw() {
    image(video, 0, 0, 300, 600);
   
    fill(255,0,0);
    stroke(255,0,0);
    //circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 140, 140);

    tint_color = document.getElementById("color_name").value;   
    tint(tint_color);
    
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
   

    if(results.length > 0)
    {
     console.log(results);
     noseX = results[0].pose.nose.x-74;
     noseY = results[0].pose.nose.y-82;   
     console.log("nose x = " + noseX);
     console.log("nose y = " + noseY);
    }
}     