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
    charactersInPlay : [],
    start : function () 
    {     
        currentState = 'game';
        Game.canvas = document.getElementById('myCanvas');
        Game.canvasContext = Game.canvas.getContext('2d');

        Background.backgroundImage = new Image();
        Background.backgroundImage.src='backgrounds/play.png';
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
        //---
        Game.charactersInPlay=[];

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
        for(var i = 0; i< Game.charactersInPlay.length; i++){
            Game.charactersInPlay[i].xPos -= 5;
            if(Game.charactersInPlay[i].xPos < 0){
                Game.charactersInPlay.splice(i, 1);
            }    
            if (Player.xPos < Game.charactersInPlay[i].xPos + Game.charactersInPlay[i].spriteW &&
                Player.xPos + Player.spriteW  > Game.charactersInPlay[i].xPos &&
                Player.yPos < Game.charactersInPlay[i].yPos + Game.charactersInPlay[i].spriteH &&
                Player.spriteH + Player.yPos >  Game.charactersInPlay[i].yPos ){
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
        for(var i = 0 ; i < Game.charactersInPlay.length; i++){
            console.log(Game.charactersInPlay);
            Game.canvasContext.drawImage(Game.charactersInPlay[i].img,
                // source rectangle
                Game.charactersInPlay[i].cycle * Game.charactersInPlay[i].spriteW, 0, Game.charactersInPlay[i].spriteW, 
                Game.charactersInPlay[i].spriteH,
                // destination rectangle
                Game.charactersInPlay[i].xPos, Game.charactersInPlay[i].yPos, Game.charactersInPlay[i].spriteW, Game.charactersInPlay[i].spriteH);   
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
            window.setTimeout(Game.mainLoop, 900 / 25);
        }
    }
}
