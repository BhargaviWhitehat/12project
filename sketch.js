var garden,gardenImg;
var rabbit,rabbitImg;
var apple,appleImg;
var orange,orangeImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
}

function setup()
{
createCanvas(400,400);

// Moving background
garden=createSprite(200,200);
garden.addImage("g1",gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage("rabbit",rabbitImg);

}

function draw() 
{
  background(0);
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();

  
  var select_sprite = Math.round(random(1,3));
  if(frameCount % 80 ==0)
  {
    if(select_sprite ==1)
    {
      createApple();
    }
      else if(select_sprite == 2)
     {
        createOrange();
      }
    
    else
    {
      createRed();
    }
  }
  
  } 
  function createApple(){
//write code here to spam the apple
  apple = createSprite(random(50,350),100,40,10);
  apple.addImage(appleImg)
  apple.scale = 0.1;
apple.velocityY =3;
apple.lifetime=150;
}
  
  function createOrange(){
  //write code here to spam the apple
  orange = createSprite(random(50,350),100,40,10);
  orange.addImage(orangeImg)
  orange.scale = 0.1;
orange.velocityY =3;
orange.lifetime=150;
  }

  function createRed()
  {
    red = createSprite(random(50,350),100,40,10);
    red.addImage(redImg)
    red.scale = 0.1;
  red.velocityY =3;
  red.lifetime=150;
  }

