canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

background_array=["mars.jpg", "bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];
var random_num= Math.floor(Math.random()*6);
console.log(random_num);

rover_x=10;
rover_y=10;
rover_height= 90;
rover_width=100;
rover_img="rover.png";
background_img= background_array[random_num];

function add(){
    background_imgTag=new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= background_img;

    rover_imgTag= new Image();
    rover_imgTag.onload= uploadRover;
    rover_imgTag.src= rover_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if (keyPressed== '40'){
        down();
        console.log("down");
    }
    if (keyPressed== '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
}

function up(){
    if(rover_y >=10){
        rover_y -= 10;
        console.log("when the up arrow is pressed, x="+rover_x+"- y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if (rover_y <= 500){
        rover_y += 10;
        console.log("when the down arrow is pressed, x="+rover_x+"- y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if (rover_x >= 10){
        rover_x -= 10;
        console.log("when the left arrow is pressed, x="+rover_x+"- y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if (rover_x <= 700){
        rover_x += 10;
        console.log("when the right arrow is pressed, x="+rover_x+"- y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}