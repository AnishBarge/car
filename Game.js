class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var count=await database.ref("playerCount").once("value")
      if(count.exists()){
        playerCount=count.val()
        player.getCount()
      }
      
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200)
    car2=createSprite(300,200)
    car3=createSprite(500,200)
    car4=createSprite(700,200)
    cars=[car1,car2,car3,car4]
  }
  playstate(){
    form.hide()
    //text("Game Start",150,150)
    Player.playerinfo()
    if(allplayers!==undefined){
      //var position=100
      var index=0
      var x=0
      var y
      for(var pls in allplayers){
        index=index+1
        x=x+200
        y=displayHeight-allplayers[pls].distance
       
         cars[index-1].x=x
         cars[index-1].y=y
         if(index===player.index){
           cars[index-1].shapeColor="red"
          camera.position.x=displayWidth/2
          camera.position.y=cars[index-1].y
         }
        /*if(pls==="player"+player.index)
          fill("red")
          else
          fill("black")
          position=position+50 
      text(allplayers[pls].name+":"+allplayers[pls].distance,100,position)
*/
    }
  }
  if(keyDown("UP_ARROW")&&player.index!==null){
    player.distance += 10
    player.update()
  }
  drawSprites
}}
