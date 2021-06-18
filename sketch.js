var backgroundImg, ISS_Img, spacecraft_NoGas_Img, spacecraft_Gas_Img, spacecraft_RightGas_Img, spacecraft_LeftGas_Img;

var ISS_sprite, spacecraft_sprite, xPos;
var hasDocked = false;


function preload() {
  backgroundImg = loadImage("Project 42 Images/spacebg.jpg");
  ISS_Img = loadImage("Project 42 Images/iss.png");
  spacecraft_NoGas_Img = loadImage("Project 42 Images/spacecraft1.png");
  spacecraft_Gas_Img = loadImage("Project 42 Images/spacecraft2.png");
  spacecraft_LeftGas_Img = loadImage("Project 42 Images/spacecraft3.png");
  spacecraft_RightGas_Img = loadImage("Project 42 Images/spacecraft4.png");
}

function setup() {
  createCanvas(1000, 600);

  spacecraft_sprite = createSprite(410, 500);
  spacecraft_sprite.addImage("spacecraft", spacecraft_NoGas_Img);
  spacecraft_sprite.addImage("Going up", spacecraft_Gas_Img);
  spacecraft_sprite.addImage("Going down", spacecraft_Gas_Img);
  spacecraft_sprite.addImage("Going right", spacecraft_LeftGas_Img);
  spacecraft_sprite.addImage("Going left", spacecraft_RightGas_Img);
  spacecraft_sprite.scale = 0.3;

  ISS_sprite = createSprite(480, 260);
  ISS_sprite.addImage("ISS", ISS_Img);

  xPos = Math.round(random(310, 510));
}

function draw() {
  background(backgroundImg);

  console.log(spacecraft_sprite.x + ", " + spacecraft_sprite.y);
  if (!hasDocked) {
    spacecraft_sprite.x = xPos;
    if (keyDown(UP_ARROW)) {
      spacecraft_sprite.changeImage("Going up", spacecraft_Gas_Img);
      spacecraft_sprite.y -= 1;
    }
    if (keyDown(DOWN_ARROW)) {
      spacecraft_sprite.changeImage("Going down", spacecraft_Gas_Img);
    }
    if (keyDown(RIGHT_ARROW)) {
      spacecraft_sprite.changeImage("Going right", spacecraft_LeftGas_Img);
      xPos += 1;
    }
    if (keyDown(LEFT_ARROW)) {
      spacecraft_sprite.changeImage("Going left", spacecraft_RightGas_Img);
      xPos -= 1;
    }
    if (ISS_sprite.x - 80 === spacecraft_sprite.x && ISS_sprite.y + 130 === spacecraft_sprite.y) {
      console.log("HURRAY!");
    }
  }

  drawSprites();
}