var img;
var k;
function preload(){
  img = loadImage('kirby.png');

}
function setup() {
  createCanvas(400,400);
  k = new Kirby();
}

function draw() {
  background(220);
  k.mostrar();
  if(keyIsPressed && keyCode==RIGHT_ARROW){
    k.derecha();
   } 
  if(keyIsPressed && keyCode==LEFT_ARROW){
    k.izquierda();
   } 
  if(keyIsPressed && keyCode==UP_ARROW){
    k.arriba();
   } 
  if(keyIsPressed && keyCode==DOWN_ARROW){
    k.abajo();
   } 
  
}













class Kirby{
  constructor(){
    this.x = width/2;
    this.y = height/2;
    }
  mostrar(){
     imageMode(CENTER);
  image(img,this.x,this.y,100,100);
  }
  
   derecha(){
    this.x++;
  
}
  
  
  izquierda(){
      this.x--;
       }
  
  arriba(){
    this.y--;
  }
  
  abajo(){
    this.y++;
  }
  
 
}
