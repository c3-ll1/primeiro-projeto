var caixa;
var caixa2;


function setup() {
  createCanvas(400,400);
  caixa = createSprite(200,200,40,40);
  caixa2 = createSprite(100,100,40,40);
  caixa.shapeColor = "red";
}

function draw() 
{
  background(30);
  
  if(keyIsDown(RIGHT_ARROW)) {
    caixa.position.x = caixa.position.x + 2;
  }

  if(keyIsDown(LEFT_ARROW)) {
    caixa.position.x = caixa.position.x - 2;
  }

  drawSprites();

}




