"use strict"

var Over = {

    checkClick : function() {
        if(Mouse.checkClickOn(PlayAgainBut)){
            // this restarts the game, automatically pointing to menu start
                   // cookie trying 
            Highscore.check(Game.score);
            location.reload(true);  
        }
    },
    
    start : function () 
    {     
        CloseBut.draw = false;
         //adding start buttons
         overMenuButs.forEach(function(button){
            button.img = new Image();
            button.img.src = 'sprites/buttons.png';
        });

        //adding general buttons (sound and close)
        generalButs.forEach(function(button){
            button.img = new Image();
            button.img.src = 'sprites/buttons.png';
        });
    
        //--- background
        Background.img.src = 'backgrounds/dead.jpg';
        Sound.start();
        Over.mainLoop();
    },
    clearCanvas : function () {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    },
    update : function () 
    {   
        if(Mouse.click){
            Over.checkClick();
        }
    },
    draw : function () 
    {       //void ctx.drawImage(image, dx, dy, dWidth, dHeight);
                //Over.canvasContext.drawImage(Ship.img, Ship.x, Ship.y, Ship.width, Ship.height);
                canvasContext.drawImage(Background.img, 0, 0, canvas.width, canvas.height);

                overMenuButs.forEach(function(button){
                    if(button.draw == true){
                        canvasContext.drawImage(button.img, button.sourceX, button.sourceY, button.sourceW, button.sourceH,
                        button.x, button.y, button.bWidth, button.bHeight);
                    }
                 })
                generalButs.forEach(function(button){
                    if(button.draw == true){
                        canvasContext.drawImage(button.img, button.sourceX, button.sourceY, button.sourceW, button.sourceH,
                        button.x, button.y, button.bWidth, button.bHeight);
                    }
                })
                canvasContext.fillStyle = '#000';
                canvasContext.font = '80px sans-serif';
                canvasContext.textBaseline = 'top'; 
                canvasContext.fillText("GAME OVER", 50, 200);
                canvasContext.font = '40px sans-serif';
                canvasContext.textBaseline = 'top'; 
                canvasContext.fillText("your score: "+ Game.score , 50, 500);
            
    },
    mainLoop :function() {
        Over.clearCanvas();
        Over.update();
        Over.draw();
            if(currentState == 'over'){
                window.setTimeout(Over.mainLoop, 1000 / 10);
            }
        },
}