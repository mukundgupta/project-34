//Create variables here
var dog;
var happyDog;
var database;
var foodStock;
var foodS;

function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png")
  dog2img = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,50,50)
  dog.addImage("img",dogimg)
  foodStock = databse.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dog2img)
}
  drawSprites();
  //add styles here

}

function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }
database.ref('/').update({
  Food:x
})
}

function readStock(data){
foodS = data.val();
}