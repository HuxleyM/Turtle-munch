"use strict";
var Game = {
	canvas : undefined,
    canvasContext : undefined, 
    x: 0,
    y: 0,
    maximumHeight: undefined,
    maximumWidth: undefined,
    delta_y: undefined,
    delta_x: undefined,
    score: 0,
    start : function () 
    {     
        currentState = 'game';
        Game.canvas = document.getElementById('myCanvas');
        Game.canvasContext = Game.canvas.getContext('2d');

        Background.backgroundImage = new Image();
        Background.backgroundImage.src='sprites/background.jpg';
            // we need to make x and y varibales for b and g or else everything is pusshe dof
        Background.x = Game.x;
        Background.y = Game.y;
        //the global varibales will automatically append as they are not in any object.
        Background.maximumWidth = Game.canvas.width;
        Background.maximumHeight = Game.canvas.height;
        Background.delta_x= - 5; ///--------------------------- changed this for object
        Background.delta_y= - 0.5;
        // player
        Player.img = new Image();
        Player.img.src = "sprites/garpOne.png";
      
        Game.mainLoop();
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

    update : function () {
        Game.score++;
        Player.yPos+=2;
        if(Game.score > (200 * level)){
            level++;
            controlState('next');
        }
        Game.checkCollision();
        
        Background.x += Background.delta_x;
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
                Player.spriteH + Player.yPos >  charactersInPlay[i].yPos ){
                    // collision detected!
                    console.log('collided');
                }  
         } 
    },
    checkCollision: function(){
        if((Player.yPos + Player.spriteH) > Game.canvas.height){
            controlState('over');
         }  
    },
    draw : function (){ 
        // when drawing thing about it like back to front
        Game.drawBackground();
        Game.canvasContext.drawImage(Player.img,100,Player.yPos,Player.spriteW, Player.spriteH);
        for(var i = 0 ; i < charactersInPlay.length; i++){
            console.log(charactersInPlay);
            Game.canvasContext.drawImage(charactersInPlay[i].img,
                // source rectangle
                charactersInPlay[i].cycle * charactersInPlay[i].spriteW, 0, charactersInPlay[i].spriteW, 
                charactersInPlay[i].spriteH,
                // destination rectangle
                charactersInPlay[i].xPos, charactersInPlay[i].yPos, charactersInPlay[i].spriteW, charactersInPlay[i].spriteH);   
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
