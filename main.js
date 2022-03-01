function preload(){
}

function setup(){
  canvas = createCanvas(480,480);
  canvas.position(110,300);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw(){
    image(video,0,0,480,480);
    
}

function take_snapshot(){
    save('photoframe_photo.png')
}

function filter_tint(){
   tint_color = document.getElementById("color").value; 
}