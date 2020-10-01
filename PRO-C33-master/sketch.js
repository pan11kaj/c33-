var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var play,end;
var gameState = play;
var particle;
var turn =0;
var counting = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  text("Score = "+score,20,30);
  background("black");
  textSize(20)
 
 text("500",100,500);
 text("500",20,500);
 text("500",180,500);
 text("100",260,500);
 text("100",340,500);
 text("100",420,500);
 text("200",500,500);
 text("200",580,500);
 text("200",660,500);
 text("200",740,500);
 text("Score ="+counting,20,30);
  Engine.update(engine);
 
  if(score<6){
    for (var i = 0; i < plinkos.length; i++) {
     
      plinkos[i].display();
      for (var j = 0; j < particles.length; j++) {
   
        particles[j].display();
      }
      for (var k = 0; k < divisions.length; k++) {
        
        divisions[k].display();
     
       }
      
    }
  }
   
  if(score===5 ){
    textSize(100);
    fill("red");
    text("GAME OVER",100,300);
    particles.pop();

   }
   
 
 
}

function mousePressed(){
if(gameState !== "end"){
  score++;
     
  particle = new Particle(mouseX,10,10,10);
  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  
  if(score<6){
    particle.display();
    if(particle.body.position.y>0 ){

      if(particle.body.position.x<300){
        counting = counting+500;   
      } 
      if(particle.body.position.x<600 && particle.body.position.x>301){
        counting = counting+200;   
      } 
      if(particle.body.position.x<900 && particle.body.position.x>601){
        counting = counting+200;   
      } 
  }
   
 
   }
  
  


}

 console.log(particle.body.speed);
     }