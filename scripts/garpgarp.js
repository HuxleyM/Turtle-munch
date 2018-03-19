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
    frames : 0,
    start : function () 
    {     
        console.log('level is '+ level+ 'length is '+ inPlay.length );
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
        Player.img.src = "sprites/gameChars.png";
        //---
         //adding general buttons (sound and close)
        inPlay.forEach(function(Char){
            Char.img = new Image();
            Char.img.src = 'sprites/gameChars.png';
        });

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
        Game.canvasContext.fillText("score " +Game.score, 200, 0);
        Game.canvasContext.fillText("level " +level , 300, 0);
    },

    clearCanvas : function () {
        Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
    },

    update : function () {
        // updating player sprite doesnt work....
        Player.cycle = (Player.cycle + 1) % Player.frames;

        Game.frames++
        Game.score++;

        // buttons no longer working
        Player.y += 2;
        if(Game.frames > (400 * level)){
            level++;
            controlState('next');
        }
        Game.checkCollision();
        
        Background.x += Background.delta_x;
        if(Background.x <= - Background.maximumWidth){
            Background.x = Game.x;
        }   
        for(var i = 0; i < inPlay.length; i++){
            var char = inPlay[i];
            char.x -= 5;
            if(char.x < 0){
                char.x = Math.floor((Math.random()* 500)+600);
                char. y = Math.floor((Math.random()* Game.canvas.height) + char.bHeight );
            }
        }   
          
    },
    checkCollision: function(){
        if((Player.y + Player.spriteH) > Game.canvas.height){
            controlState('over');
         }  
         inPlay.forEach(function(enemy){
            if(Player.x < enemy.x + enemy.bWidth &&
                Player.x + Player.bWidth > enemy.x &&
                Player.y < enemy.y + enemy.bHeight &&
                Player.bHeight + Player.y > enemy.y){
                    if(enemy.name == 'plastic'){
                        controlState('over');
                    }
                    else if(enemy.name == 'jellyfish'){
                        Game.score += 50;
                        // spawn elsewhere
                        enemy.x = Math.floor((Math.random()* 500)+600);
                        enemy. y = Math.floor((Math.random()* Game.canvas.height) + enemy.bHeight );

                    }
                    else{
                        // do something
                    };
                    
                }
         })
    },
    draw : function (){ 
        // when drawing thing about it like back to front
        Game.drawBackground();
       
        Game.canvasContext.drawImage(Player.img, Player.sourceX, Player.sourceY, Player.sourceW, Player.sourceH,
            Player.x, Player.y, Player.bWidth, Player.bHeight);
        
        inPlay.forEach(function(button){
            Game.canvasContext.drawImage(button.img, button.sourceX, button.sourceY, button.sourceW, button.sourceH,
            button.x, button.y, button.bWidth, button.bHeight);
        })
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
