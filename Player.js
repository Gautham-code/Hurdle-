class Player {

    constructor(){}
    
    getCount(){
        var playerStateRef = database.ref('playerCount');
        playerStateRef.on("value",function(data){
            playerCount = data.val();
    
        });
    } 
    
    updateCount(count){
        database.ref('/').update({
            playerCount : count
    });
    } 
     update(name){
         var playerIndex = "player"+playerCount;
         database.ref(playerIndex).set({
name : name

         });
     }
      
    
    }
    
    
    