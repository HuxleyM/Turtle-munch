"use strict"

var Next ={
    //timer for saying how long to be in next level state
    timer : 0,  

    checkClick : function() {
        // if being closed change else to the rest of this
        if(Mouse.checkClickOn(NextBut)){
                // if clicked start playing again.
                    controlState('game');
            }
        },
    start : function () 
    {    
        // adding next button
         nextMenuButs.forEach(function(button){
            button.img = new Image();
            button.img.src = 'sprites/buttons.png';
        });

        //--- adding background
        Background.img.src = 'backgrounds/next.jpg';
        Sound.start();
        Next.mainLoop();
    },
    clearCanvas : function () {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    },

    update : function () 
    {   
        // updating timer, automatically shift to new state after allotted frames
        Next.timer ++;
        if(Next.timer > 100){
            difficulty.update();
            controlState('game');
        }

        if(Mouse.click){
            Menu.checkClick();
        }
    },
    draw : function () 
    {       
        canvasContext.drawImage(Background.img, 0, 0, canvas.width, canvas.height);
        nextMenuButs.forEach(function(button){
            if(button.draw == true){
                canvasContext.drawImage(button.img, button.sourceX, button.sourceY, button.sourceW, button.sourceH,
                button.x, button.y, button.bWidth, button.bHeight);
            }
        })
    },
    mainLoop :function() {
        Next.clearCanvas();
        Next.update();
        Next.draw();
        // more frames smoother however this depends on the resources of the machine, if unable it will be laggy
        // maths 
            if(currentState == 'next'){
                window.setTimeout(Next.mainLoop, 1000 / 10);
            }
    },
}