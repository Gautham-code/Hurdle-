class Game {
    constructor() {}

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data) {
            gameState = data.val();
        })
    }

    update(state) {
  database.ref('/').update({
    gameState: state
        })
    }


    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form()
            form.display();
        }
        runner1 = createSprite(10, 200);
        runner1.scale = 1;
        runner1.setCollider("rectangle", 0, 0)
        runner1.velocityY = 1.2;
        runner1.addAnimation("runner1", runner1_img);
        runner2 = createSprite(10, 500);
        runner2.scale = 1;
        runner2.velocityY = 1.2;

        runner2.setCollider("rectangle", 0, 0);
       
 runner2.addAnimation("runner2", runner2_img);
runners = [runner1, runner2];
       


    }
    play() {
        form.hide();
        Player.getPlayerInfo();
        spawnObstacles();
        spawnObstacles1();



       
  if (allPlayers !== undefined) {
     image(track, 0, -20, displayWidth * 5, displayHeight);
           
var index = 0;
            
 var y = 140;
 var x = 50;


           


    for (var plr in allPlayers) {
          index = index + 1;


      y = y + 260;
     x = 360 - allPlayers[plr].distance;
     runners[index - 1].x = x;
     runners[index - 1].y = y;
                

 if (index === player.index) {
stroke(10);
  fill("red");
   ellipse(x, y, 60, 60);
  runners[index - 1].shapeColor = "red";
  camera.position.x = runners[index - 1].x;
  camera.position.y = runners[index - 1].y;
 player.x = x;  player.y = y;



                    
                    



                }


                
   if (keyIsDown(UP_ARROW)) 
         {
  player.velocityY = -7;
          }
    if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
      player.distance -= 8
     player.update();
    }
     }

        }
  if (player.distance === -9230) {
     gameState = 2;
        }

     drawSprites();
    }

    end() {
        console.log("Game Ended");
        console.log(player.rank);
    }
}

function spawnObstacles() {
    var i = 0;
    if (frameCount % 80 === 0) {
        i = i + 1000
        var obstacle = createSprite(8000, 425);

        obstacle.velocityX = -5;
        obstacle.addImage(hurdle);
        

        obstacle.scale = 1;
        obstacle.lifetime = 5000;
        obstacle.setCollider("rectangle", -10, 0, 90, 150);
      
    }
}

