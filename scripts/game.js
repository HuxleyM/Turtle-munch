"use strict";

var Game = {
    x: 0,
    y: 0,
    maximumHeight: undefined,
    maximumWidth: undefined,
    delta_y: undefined,
    delta_x: undefined,
    gravity : 2,
    inPlay : [],
    // building in game notifications
    notification : '',
    notificationPost : undefined,
    notificationTimer: 0,
    //start with 3 lives
    lives : 3,
    score: 0,
    frames : 0,
    
    start : function () 
    {     
        // controlling the switch statement.
        currentState = 'game';
        Background.img.src='backgrounds/play.png';
            // we need to make x and y varibales for b and g or else everything is pushe dof
        Background.x = Game.x;
        Background.y = Game.y;
        //the global varibales will automatically append as they are not in any object.
        Background.maximumWidth = canvas.width;
        Background.maximumHeight = canvas.height;
        Background.delta_x= - 5; ///--------------------------- changed Game for object
        Background.delta_y= - 0.5;
        //adding general buttons (sound and close)
         generalButs.forEach(function(button){
            button.img = new Image();
            button.img.src = 'sprites/buttons.png';
        });
    
        // player
        Player.img = new Image();
        Player.img.src = "sprites/gameChars.png";
        //---
        Game.inPlay = inPlay;
         //adding general buttons (sound and close)
        Game.inPlay.forEach(function(Char){
            Char.img = new Image();
            Char.img.src = 'sprites/gameChars.png';
        });
        Sound.start();
        Game.mainLoop();
    },
    drawBackground : function(){
        // width thats been defined i the background object is now being changed to the actual width of the image.
        //ading the background
        canvasContext.drawImage(Background.img,Background.x, Background.y, Background.img.width,  Background.img.height);
        //-------------------------------------- drawing score
        canvasContext.fillStyle = '#fff';
        canvasContext.font = '20px sans-serif';
        canvasContext.textBaseline = 'top'; 
        canvasContext.fillText("score " +Game.score, 200, 0);
        canvasContext.fillText("level " + Difficulty.level, 50, 0);
        canvasContext.fillText("lives " +Game.lives , 350, 0);
        //Game.canvasContext.fillText("Highscore " + highscore, 350, 100);
        // any notification i.e. lost life or plus 50 go here
        canvasContext.font = '40px sans-serif';
        if(Game.notificationPost){
            canvasContext.fillText(Game.notification , 200, 50);
        }
        generalButs.forEach(function(button){
            if(button.draw == true){
                canvasContext.drawImage(button.img, button.sourceX, button.sourceY, button.sourceW, button.sourceH,
                button.x, button.y, button.bWidth, button.bHeight);
            }
        })
    },

    clearCanvas : function () {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    },

    update : function () {
        // updating Sprite movements.
        Player.cycle = (Player.cycle + 1) % Player.frames;
        inPlay.forEach(function(enemy){
            enemy.cycle = (enemy.cycle + 1) % enemy.frames;
        })

        // gravity acting on turtle
        Player.y += Game.gravity;
        // frame count will instigate wehn to take to next screen
        Game.frames++
        Game.score++;

        // as levels progress, the next menu will give enemies additional up and down movement values.
        // Game loop will run and move the characters the movement value assigned
        Game.inPlay.forEach(function(enemy){
            // move charcter down
            enemy.y += enemy.move;
            // if charcter off screen move upwards
            if(enemy.y+ enemy.bHeight > canvas.height){
                enemy.move = - enemy.move;
            }
            if(enemy.y - enemy.bHeight <  0 ){
                enemy.move = + enemy.move;
            }
        });

        //controlling notifications
        if(Game.notificationPost){
            Game.notificationTimer++;
        }
        // if 50 frames passed remove notice
        if(Game.notificationTimer == 50){
            Game.notification='';
            Game.notificationTimer = 0;
            Game.notificationPost = false;
        }
       
        // every 500 frames new level
        if(Game.frames > (500)){
            difficulty.update();
            controlState('next');
        }

        // -- checkinkg charcters havent collided
        Game.checkCollision();
        
        //-- updating the moving background
        Background.x += Background.delta_x;
        if(Background.x <= - Background.maximumWidth){
            Background.x = Game.x;
        }   
        //-- Game moves the chacters along the screen, 
        // -- if x becomes less then zero, offscreen, respawn the charcter further on in the game.
        for(var i = 0; i < Game.inPlay.length; i++){
            var char = Game.inPlay[i];
            char.x -= 5;
            if(char.x < 0){
                char.x = Math.floor((Math.random()* canvas.width)+ canvas.width);
                char. y = Math.floor((Math.random()* canvas.height) - char.bHeight );
            }
        }   
    },

    checkCollision: function(){
        // if drops to bottom of screen then game over instantly
        if((Player.y + Player.bHeight) > canvas.height){
            controlState('over');
         }  

        // checking no charcters collide with player
        for(var i = 0 ; i < Game.inPlay.length; i++){
            var enemy = Game.inPlay[i];
            if(Player.x < enemy.x + enemy.bWidth &&
                Player.x + Player.bWidth > enemy.x &&
                Player.y < enemy.y + enemy.bHeight &&
                Player.bHeight + Player.y > enemy.y){

                    if(enemy.name == 'plastic'){
                        // setting notifications
                        Game.notification = 'lost a life!';
                        Game.notificationPost = true;

                        Game.lives--;
                        enemy.x = Math.floor((Math.random()* canvas.width)+ (canvas.width/2));
                        enemy. y = Math.floor((Math.random()* canvas.height) - enemy.bHeight );
                        if(Game.lives == 0){
                            controlState('over');
                        }
                    }
                    else if(enemy.name == 'jellyfish'){
                        // setting notifications
                        Game.notification = ' yummy! + 50';
                        Game.notificationPost = true;

                        Game.score += 50;
                        // spawn elsewhere
                        enemy.x = Math.floor((Math.random()* canvas.width)+ (canvas.width/2));
                        enemy. y = Math.floor((Math.random()* canvas.height) - enemy.bHeight );

                    }
                    else if(enemy.name == 'fish'){
                        // setting notifications
                        Game.notification = ' another Life!';
                        Game.notificationPost = true;
                        
                        Game.inPlay.splice(i,1);
                        
                        Game.lives += 1;
                        // spawn elsewhere
                        enemy.x = Math.floor((Math.random()* canvas.width)+ (canvas.width/2));
                        enemy. y = Math.floor((Math.random()* canvas.height) - enemy.bHeight );
                    }
                    else{
                        // do something
                    };  
                }
        }
    },
    draw : function (){ 
        // when drawing thing about it like back to front
        Game.drawBackground();

        canvasContext.drawImage(Player.img, Player.sourceX + (Player.sourceW * Player.cycle), Player.sourceY, Player.sourceW, Player.sourceH,
            Player.x, Player.y, Player.bWidth, Player.bHeight);
  
        Game.inPlay.forEach(function(enemy){
            canvasContext.drawImage(enemy.img, enemy.sourceX + (enemy.sourceW * enemy.cycle), enemy.sourceY, enemy.sourceW, enemy.sourceH,
            enemy.x, enemy.y, enemy.bWidth, enemy.bHeight);
        })
    },
    mainLoop :  function() {
        Game.clearCanvas();
        Game.update();
        Game.draw();
        // more frames smoother however Game depends on the resources of the machine, if unable it will be laggy
        // maths 
        if(currentState == 'game'){
            window.setTimeout(Game.mainLoop, 1000 / 20);
        }
    }
}