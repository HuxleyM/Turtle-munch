"use strict";




//  key controls
  //---- key controls here for now but will be moved... these controls need to be matched to states.. 
  // or else his is all just  a bit messy
  window.addEventListener('keydown', function(event){
    if(event.keyCode == Game.keys.SP || event.keyCode == Game.keys.UA){
        if(Player.yPos > 0){
            Player.yPos-=5;
        }
    }
  },true);

  window.addEventListener('keyup', function(event){
    if(event.keyCode == Game.keys.SP || event.keyCode == Game.keys.UA){
        Player.yPos = Player.yPos;
    }
  },true);
  



var Game = {
	canvas : undefined,
    canvasContext : undefined, 
    x: 0,
    y: 0,
    maximumHeight: undefined,
    maximumWidth: undefined,
    delta_y: undefined,
    delta_x: undefined,
    keys: {
        UA:38,  SB:40, //SB = space bar
    },
    score: 0,
  
    randomizeYPos: function(){
        return Math.floor((Math.random() * Game.canvas.height) + 1);
    },
    checkCollision: function(){
        if((Player.yPos + Player.spriteH) > Game.canvas.height){
            controlState('over');
        }
        /*for(var a = 0; a< charactersInPlay.length; a++){
            /*if (charactersInPlay[a].xPos < Player.xPos + Player.spriteW &&
                charactersInPlay[a].xPos + charactersInPlay[a].spriteW  > Player.xPos &&
                charactersInPlay[a].yPos < Player.yPos + Player.spriteH &&
                charactersInPlay[a].spriteH + charactersInPlay[a].yPos >  Player.yPos )
                 {
                 // collision detected!
                 
             }*/
            /* 
           if (Player.xPos < charactersInPlay[a].xPos + charactersInPlay[a].spriteW &&
                Player.xPos +  Player.spriteW > charactersInPlay[a].xPos &&
                Player.yPos < charactersInPlay[a].yPos + charactersInPlay[a].spriteH &&
                Player.spriteH + Player.yPos >  charactersInPlay[a].yPos) {
                // collision detected!
                console.log('collided');
                }
        }*/
         
        
    },
    start : function () 
    {     
        currentState = 'game';
        Game.canvas = document.getElementById('myCanvas');
        Game.canvasContext = Game.canvas.getContext('2d');
        Background.backgroundImage = new Image();
        Background.backgroundImage.src='background.jpg';
            // we need to make x and y varibales for b and g or else everything is pusshe dof
        Background.x = Game.x;
        Background.y = Game.y;
        //the global varibales will automatically append as they are not in any object.
        Background.maximumWidth = Game.canvas.width;
        Background.maximumHeight = Game.canvas.height;
        Background.delta_x= - 5; ///--------------------------- changed this for object
        Background.delta_y= - 0.5;
        // sprite source matching
        Garp1.img = new Image();
        Garp1.img.src = "garpOne.png";
        Garp2.img = new Image();
        Garp2.img.src = "garpOne.png";
        Garp3.img = new Image();
        Garp3.img.src = "garpOne.png";
        Garp4.img = new Image();
        Garp4.img.src = "garpOne.png";
        // player
        Player.img = new Image();
        Player.img.src = "garpOne.png";
        // characters in play
        // so availbale characters still has 4 characters in play has 3
        availableCharacters[0].xPos= 350;
        availableCharacters[1].xPos = 450;
        availableCharacters[2].xPos = 600;
        Player.xPos = 200;
        Player.yPos = 300;
        charactersInPlay = [availableCharacters[0],availableCharacters[1],availableCharacters[2]];
        console.log('available'+availableCharacters.length);
        console.log('inplay'+charactersInPlay.length);
        Game.mainLoop();
    },
    generateNew : function(){
        var rand = Math.floor(Math.random() * availableCharacters.length);
        var toMove = availableCharacters[rand];
        toMove.xPos = 600;
        charactersInPlay.push(toMove);
    },

    

    drawBackground : function(){
        // width thats been defined i the background object is now being changed to the actual width of the image.
  
        //ading the background
        Game.canvasContext.drawImage(Background.backgroundImage,Background.x, Background.y, Background.backgroundImage.width,  Background.backgroundImage.height);
        //-------------------------------------- drawing score
        Game.canvasContext.fillStyle = '#fff';
        Game.canvasContext.font = '20px sans-serif';
        Game.canvasContext.textBaseline = 'top'; 
        Game.canvasContext.fillText("score " +Game.score,200,0);
    },
    clearCanvas : function () {
        Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
    },
    update : function () 
{       Game.score++;
        if(Game.score > (200 * level)){
            level++;
            controlState('next');
        }
        Game.checkCollision();
        Player.yPos+=2;
        Background.x += Background.delta_x;
        // if background distancex is greater then backgrounds maximum width then start again!
        if(Background.x <= - Background.maximumWidth){
            Background.x = Game.x;
        }   

        for(var i = 0; i< charactersInPlay.length; i++){
            charactersInPlay[i].xPos -= 5;
            if(charactersInPlay[i].xPos < 0){
                charactersInPlay.splice(i, 1);
            }    
            if (Player.xPos < charactersInPlay[i].xPos + charactersInPlay[i].spriteW &&
                Player.xPos + Player.spriteW  > charactersInPlay[i].xPos &&
                Player.yPos < charactersInPlay[i].yPos + charactersInPlay[i].spriteH &&
                Player.spriteH + Player.yPos >  charactersInPlay[i].yPos )
                 {
                 // collision detected!
                 console.log('collided');
                 
                 }
            }

       if(charactersInPlay.length < 3){
            Game.generateNew();
        }
        
        
        
    
},
    draw : function () 
{ 
            // when drawing thing about it like back to front
            Game.drawBackground();
            Game.canvasContext.drawImage(Player.img,100,Player.yPos,Player.spriteW, Player.spriteH);
            for(var a =0 ; a < charactersInPlay.length; a++){
                Game.canvasContext.drawImage(charactersInPlay[a].img,
                    // source rectangle
                    charactersInPlay[a].cycle * charactersInPlay[a].spriteW, 0, charactersInPlay[a].spriteW, 
                    charactersInPlay[a].spriteH,
                    // destination rectangle
                    charactersInPlay[a].xPos, charactersInPlay[a].yPos, charactersInPlay[a].spriteW, charactersInPlay[a].spriteH);   
            }    
},
    mainLoop :  function() {
        Game.clearCanvas();
        Game.update();
        Game.draw();
        // more frames smoother however this depends on the resources of the machine, if unable it will be laggy
        // maths 
        //console.log('game Js');
        if(currentState == 'game'){
            window.setTimeout(Game.mainLoop, 800 / 10);
        }
    }
}
