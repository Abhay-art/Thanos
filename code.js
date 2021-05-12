var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["192ab389-91dc-47ae-a85e-838eda61ece2","822334f1-bcb7-4e63-83b6-608fb8ade2c9","f3f56a5f-b66a-49be-8b51-965ec8a56b28","88e9a3b7-af2a-4365-9760-2129f32a001e","e12b6aa5-412c-46d3-bab7-055f11af9b10","fd6d5d80-d9fb-458a-b1f1-2be167b65eca","56a47b68-e69b-4d17-868c-782895d1aaaa","bef255b3-de03-4e91-b4a8-dd44d69bf86a","be9d0bc6-5e7a-46f5-9ac4-6dabbcfb6b3a","5acb4a59-f091-4f23-ae19-b5563074a730","baa75eb4-82c2-4312-a2c5-abf4fef28f8c","cd3ef84d-be8d-4044-a631-556a74ea90ca","46d585bb-3197-431c-8112-ae18aa50db9c"],"propsByKey":{"192ab389-91dc-47ae-a85e-838eda61ece2":{"name":"heart","sourceUrl":"assets/api/v1/animation-library/gamelab/NolfDXD9f49COunFY6Ops3IuWeUdWXbo/category_retro/retro_red_heart.png","frameSize":{"x":167,"y":143},"frameCount":1,"looping":true,"frameDelay":2,"version":"NolfDXD9f49COunFY6Ops3IuWeUdWXbo","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":143},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NolfDXD9f49COunFY6Ops3IuWeUdWXbo/category_retro/retro_red_heart.png"},"822334f1-bcb7-4e63-83b6-608fb8ade2c9":{"name":"game over.png","sourceUrl":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/822334f1-bcb7-4e63-83b6-608fb8ade2c9.png","frameSize":{"x":320,"y":157},"frameCount":1,"looping":true,"frameDelay":4,"version":"3yxkd0UtrZ6pGlqOUOJWgVwJ9WHuSIro","loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":157},"rootRelativePath":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/822334f1-bcb7-4e63-83b6-608fb8ade2c9.png"},"f3f56a5f-b66a-49be-8b51-965ec8a56b28":{"name":"space stone.png","sourceUrl":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/f3f56a5f-b66a-49be-8b51-965ec8a56b28.png","frameSize":{"x":190,"y":180},"frameCount":1,"looping":true,"frameDelay":4,"version":"4TcLhjliNv1NOt4BT0zvzb_RIdZigpy9","loadedFromSource":true,"saved":true,"sourceSize":{"x":190,"y":180},"rootRelativePath":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/f3f56a5f-b66a-49be-8b51-965ec8a56b28.png"},"88e9a3b7-af2a-4365-9760-2129f32a001e":{"name":"captainmarvel.png","sourceUrl":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/88e9a3b7-af2a-4365-9760-2129f32a001e.png","frameSize":{"x":198,"y":240},"frameCount":1,"looping":true,"frameDelay":4,"version":"7toNOvX8NFALfnwE7KvgPX2TBvYPMW84","loadedFromSource":true,"saved":true,"sourceSize":{"x":198,"y":240},"rootRelativePath":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/88e9a3b7-af2a-4365-9760-2129f32a001e.png"},"e12b6aa5-412c-46d3-bab7-055f11af9b10":{"name":"thor.png","sourceUrl":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/e12b6aa5-412c-46d3-bab7-055f11af9b10.png","frameSize":{"x":192,"y":262},"frameCount":1,"looping":true,"frameDelay":4,"version":"uU6PNTSsg.HzPr.ZxbhxpdNU2Au8OGfF","loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":262},"rootRelativePath":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/e12b6aa5-412c-46d3-bab7-055f11af9b10.png"},"fd6d5d80-d9fb-458a-b1f1-2be167b65eca":{"name":"iron man.png","sourceUrl":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/fd6d5d80-d9fb-458a-b1f1-2be167b65eca.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"a9eV1umgnljT3AjBZlJaQn_RcA3QpadX","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/fd6d5d80-d9fb-458a-b1f1-2be167b65eca.png"},"56a47b68-e69b-4d17-868c-782895d1aaaa":{"name":"spiderman.png","sourceUrl":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/56a47b68-e69b-4d17-868c-782895d1aaaa.png","frameSize":{"x":194,"y":259},"frameCount":1,"looping":true,"frameDelay":4,"version":"_2tbTEm30o92fS_hmOAoh.1llBZb76jn","loadedFromSource":true,"saved":true,"sourceSize":{"x":194,"y":259},"rootRelativePath":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/56a47b68-e69b-4d17-868c-782895d1aaaa.png"},"bef255b3-de03-4e91-b4a8-dd44d69bf86a":{"name":"endgame.png","sourceUrl":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/bef255b3-de03-4e91-b4a8-dd44d69bf86a.png","frameSize":{"x":346,"y":146},"frameCount":1,"looping":true,"frameDelay":4,"version":"qo1KErOu2WFrvi0M03my5j4RC55JDEOb","loadedFromSource":true,"saved":true,"sourceSize":{"x":346,"y":146},"rootRelativePath":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/bef255b3-de03-4e91-b4a8-dd44d69bf86a.png"},"be9d0bc6-5e7a-46f5-9ac4-6dabbcfb6b3a":{"name":"thanos.png","sourceUrl":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/be9d0bc6-5e7a-46f5-9ac4-6dabbcfb6b3a.png","frameSize":{"x":180,"y":280},"frameCount":1,"looping":true,"frameDelay":4,"version":"cikg0Dio3QfFzOmwSQUNHvmvEhVts3aG","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":280},"rootRelativePath":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/be9d0bc6-5e7a-46f5-9ac4-6dabbcfb6b3a.png"},"5acb4a59-f091-4f23-ae19-b5563074a730":{"name":"obstacle1.png_1","sourceUrl":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/5acb4a59-f091-4f23-ae19-b5563074a730.png","frameSize":{"x":300,"y":44},"frameCount":1,"looping":true,"frameDelay":4,"version":"MRPsUW2QFXqt3UBoLGjViiuZtBmvud0s","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":44},"rootRelativePath":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/5acb4a59-f091-4f23-ae19-b5563074a730.png"},"baa75eb4-82c2-4312-a2c5-abf4fef28f8c":{"name":"obstacle2.png_1","sourceUrl":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/baa75eb4-82c2-4312-a2c5-abf4fef28f8c.png","frameSize":{"x":44,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"_X6Wpiheifkf1kOKtnlkn9YArhBhgFY3","loadedFromSource":true,"saved":true,"sourceSize":{"x":44,"y":200},"rootRelativePath":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/baa75eb4-82c2-4312-a2c5-abf4fef28f8c.png"},"cd3ef84d-be8d-4044-a631-556a74ea90ca":{"name":"obstacle3.png_1","sourceUrl":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/cd3ef84d-be8d-4044-a631-556a74ea90ca.png","frameSize":{"x":90,"y":90},"frameCount":1,"looping":true,"frameDelay":4,"version":"mqzGmh5uvw5vE7nyFAsJeKS2GDIE6War","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":90},"rootRelativePath":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/cd3ef84d-be8d-4044-a631-556a74ea90ca.png"},"46d585bb-3197-431c-8112-ae18aa50db9c":{"name":"gaunlet.png","sourceUrl":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/46d585bb-3197-431c-8112-ae18aa50db9c.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"PYQ5GglwMcXigcO7_YrpTPT9OxmckL9p","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/1RjCt5D5xrefdzuyUCjOFNB6QrGlXOkLTUk2HdYNiJc/46d585bb-3197-431c-8112-ae18aa50db9c.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var thanos=createSprite(30,350);
thanos.setAnimation("thanos.png");
thanos.scale=0.15;
thanos.visible=false;

var trophy=createSprite(200,200);
trophy.setAnimation("gaunlet.png");
trophy.scale=0.5;
trophy.visible=false;

var life1=createSprite(10,10);
var life2=createSprite(27,10);
var life3=createSprite(43,10);

life1.setAnimation("heart");
life2.setAnimation("heart");
life3.setAnimation("heart");

life1.scale=0.05;
life2.scale=0.05;
life3.scale=0.05;



var captainMarvel=createSprite(150,200,10,10);
captainMarvel.setAnimation("captainmarvel.png");
captainMarvel.scale=0.13;

var ironMan=createSprite(276,200,10,10);
ironMan.setAnimation("iron man.png");
ironMan.scale=0.13;

var spiderman=createSprite(190,200,10,10);
spiderman.setAnimation("spiderman.png");
spiderman.scale=0.13;

var thor=createSprite(235,200,10,10);
thor.setAnimation("thor.png");
thor.scale=0.10;

var wall1=createSprite(200,380);
wall1.setAnimation("obstacle1.png_1");


var wall2=createSprite(200,15);
wall2.setAnimation("obstacle1.png_1");


var wall3=createSprite(320,200);
wall3.setAnimation("obstacle2.png_1");


var wall4=createSprite(78,200);
wall4.setAnimation("obstacle2.png_1");


var wall5=createSprite(200,260);
wall5.setAnimation("obstacle3.png_1");


var wall6=createSprite(200,130);
wall6.setAnimation("obstacle3.png_1");


var gameOver=createSprite(200,200);
gameOver.setAnimation("game over.png");
gameOver.visible=false;

var logo=createSprite(200,210);
logo.setAnimation("endgame.png");
logo.visible=true;

var foodGroup=new Group();

for(var a=50;a<400;a=a+40){
  var food1=createSprite(a,70);
  food1.setAnimation("space stone.png");
  food1.scale=0.08;
  foodGroup.add(food1);
}

for(var b=70;b<320;b=b+40){
  var food2=createSprite(20,b);
  food2.setAnimation("space stone.png");
  food2.scale=0.08;
  foodGroup.add(food2);
}

for(var c=100;c<400;c=c+40){
  var food3=createSprite(370,c);
  food3.setAnimation("space stone.png");
  food3.scale=0.08;
  foodGroup.add(food3);
}
  
  for(var d=90;d<350;d=d+40){
  var food4=createSprite(120,d);
  food4.setAnimation("space stone.png");
  food4.scale=0.08;
  foodGroup.add(food4);
}

for(var e=95;e<340;e=e+40){
  var food5=createSprite(275,e);
  food5.setAnimation("space stone.png");
  food5.scale=0.08;
  foodGroup.add(food5);
}

for(var f=60;f<350;f=f+40){
  var food6=createSprite(f,345);
  food6.setAnimation("space stone.png");
  food6.scale=0.08;
  
  foodGroup.add(food6);
}

var score=0;
var life=3;
var gameState="start";

function draw() {
  background("black");
 fill("white") ;
 textSize(17);
  text(score,370,25);
  
  if(gameState=="start"){
text("Press space to start",128,49);
foodGroup.visible=false;
  thanos.visible=false;
  captainMarvel.visible=false;
  ironMan.visible=false;
  spiderman.visible=false;
  thor.visible=false;
  wall1.visible=false;
  wall2.visible=false;
  wall3.visible=false;
  wall4.visible=false;
  wall5.visible=false;
  wall6.visible=false;
  life1.visible=false;
  life2.visible=false;
  life3.visible=false;
}
if(life==2){
  life3.visible=false;
  
}

if(life==1){
  life2.visible=false;
  
}

if(life==0){
  life1.visible=false;
  
}
if(thanos.isTouching(captainMarvel)||
thanos.isTouching(ironMan)||
thanos.isTouching(spiderman)||
thanos.isTouching(thor)){
  captainMarvel.x=150;
  captainMarvel.y=200;
  ironMan.x=276;
ironMan.y=200;
  spiderman.x=190;
  spiderman.y=200;
  thor.x=235;
  thor.y=200;
  thanos.x=30;
  thanos.y=350;
  life=life-1;
}
if(life==0){
  gameState="over";
  foodGroup.destroyEach();
  thanos.destroy();
  captainMarvel.destroy();
  ironMan.destroy();
  spiderman.destroy();
  thor.destroy();
  wall1.destroy();
  wall2.destroy();
  wall3.destroy();
  wall4.destroy();
  wall5.destroy();
  wall6.destroy();
  gameOver.visible=true;
}

if(keyDown(RIGHT_ARROW)){
   thanos.x=thanos.x+5;
 }
 
  if(keyDown(LEFT_ARROW)){
   thanos.x=thanos.x-5;
  }

if(keyDown(UP_ARROW)){
   thanos.y=thanos.y-5;
 }
 
  if(keyDown(DOWN_ARROW)){
   thanos.y=thanos.y+5;
  }

if(keyDown("SPACE")&&gameState=="start"){
  gameState="play";
foodGroup.visible=true; 
thanos.visible=true;
  captainMarvel.visible=true;
  ironMan.visible=true;
  spiderman.visible=true;
  thor.visible=true;
  wall1.visible=true;
  wall2.visible=true;
  wall3.visible=true;
  wall4.visible=true;
  wall5.visible=true;
  wall6.visible=true;
  life1.visible=true;
  life2.visible=true;
  life3.visible=true;
  logo.destroy();
  thanos.visible=true;
  captainMarvel.setVelocity(randomNumber(-4,3),randomNumber(-4,3))
  ironMan.setVelocity(randomNumber(-4,3),randomNumber(-4,3))
  spiderman.setVelocity(randomNumber(-4,3),randomNumber(-4,3))
  thor.setVelocity(randomNumber(-4,3),randomNumber(-4,3))
  
}
createEdgeSprites();
thanos.collide(wall1);
thanos.collide(wall2);
thanos.collide(wall3);
thanos.collide(wall4);
thanos.collide(wall5);
thanos.collide(wall6);

captainMarvel.bounceOff(edges);
ironMan.bounceOff(edges);
spiderman.bounceOff(edges);
thor.bounceOff(edges);
captainMarvel.bounceOff(wall1);
captainMarvel.bounceOff(wall2);
captainMarvel.bounceOff(wall3);
captainMarvel.bounceOff(wall4);
captainMarvel.bounceOff(wall5);
captainMarvel.bounceOff(wall6);

ironMan.bounceOff(wall1);
ironMan.bounceOff(wall2);
ironMan.bounceOff(wall3);      
ironMan.bounceOff(wall4);
ironMan.bounceOff(wall5);
ironMan.bounceOff(wall6);

thor.bounceOff(wall1);
thor.bounceOff(wall2);
thor.bounceOff(wall3);
thor.bounceOff(wall4);
thor.bounceOff(wall5);
thor.bounceOff(wall6);

spiderman.bounceOff(wall1);
spiderman.bounceOff(wall2);
spiderman.bounceOff(wall3);
spiderman.bounceOff(wall4);
spiderman.bounceOff(wall5);
spiderman.bounceOff(wall6);

if(score==920){
  gameState="win";
  foodGroup.visible=false;
  thanos.visible=false;
  captainMarvel.visible=false;
  ironMan.visible=false;
  spiderman.visible=false;
  thor.visible=false;
  wall1.visible=false;
  wall2.visible=false;
  wall3.visible=false;
  wall4.visible=false;
  wall5.visible=false;
  wall6.visible=false;
  life1.visible=false;
  life2.visible=false;
  life3.visible=false;
  trophy.visible=true;
  gameOver.visible=false;
  textSize(10);
  fill("white");
  text("Thanos : You have acquired the infinity gaunlet , you are invincible!!",20,315)
  text("You have defeated the avengers",70,335)
}

for(var z=0;z<foodGroup.length;z++){
  if(foodGroup.get(z).isTouching(thanos)){
    foodGroup.get(z).destroy();
    score=score+20;
  }
}

 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
