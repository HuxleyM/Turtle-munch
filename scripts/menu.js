"use strict";

var Menu = {
	canvas : undefined,
    canvasContext : undefined,


    //------- pairing to controls 
    getMousePos : function(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    },

    checkClickOnCat : function(mouseX, mouseY) {
        // if being closed change else to the rest of this
        if(mouseX < CloseBut.x + CloseBut.bWidth &&
            mouseX > CloseBut.x &&
            CloseBut.y < mouseY  &&
            CloseBut.bHeight + CloseBut.y > mouseY){
                // change all draw state to false
                startMenuButs.forEach(function(button){
                    button.draw = true;
                });
                info.forEach(function(button){
                    button.draw = false;
                });
                // change close button to true
                CloseBut.draw = false;
        }
    else{
            for(var i = 0 ; i < startMenuButs.length; i++){
                // if any buttons are clicked
            var button = startMenuButs[i];

            if(mouseX < button.x + button.bWidth &&
                mouseX > button.x &&
                button.y < mouseY  &&
                button.bHeight + button.y > mouseY){
                    // change all draw state to false
                    startMenuButs.forEach(function(button){
                        button.draw = false;
                    });
                    // change close button to true
                    CloseBut.draw = true;
                    // write correct display
                    if(button == StartBut){
                        controlState('play')
                    }
                    else if(button == CreditsBut){
                       
                        CreditsInfo.draw = true;
                        console.log('assigning');
                    }
                    else{
                        AboutInfo.draw = true;;
                }
            }
            }
        }
    },
     
    
    start : function () 
    {     
        //-- starting the game again
        Menu.canvas = document.getElementById('myCanvas');
        Menu.canvasContext = Menu.canvas.getContext('2d');

        //--- background
        Background.img = new Image();
        Background.img.src = 'backgrounds/background.png';
        
        //adding start buttons
        startMenuButs.forEach(function(button){
            button.img = new Image();
            button.img.src = 'sprites/buttons.png';
            button.draw = true;
        });

        //adding info logs
        info.forEach(function(button){
            button.img = new Image();
            button.img.src = 'sprites/buttons.png';
            button.draw = false;
        });

        //adding general buttons (sound and close)
        generalButs.forEach(function(button){
            button.img = new Image();
            button.img.src = 'sprites/buttons.png';
        });
    
        Menu.controls();
        Menu.mainLoop();
    },

    clearCanvas : function () {
        Menu.canvasContext.clearRect(0, 0, Menu.canvas.width, Menu.canvas.height);
    },

    update : function () 
        {   
    },
    draw : function () 
{   
    Menu.canvasContext.drawImage(Background.img, 0, 0, Menu.canvas.width, Menu.canvas.height);
  //void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  info.forEach(function(button){
    if(button.draw == true){
        Menu.canvasContext.drawImage(button.img, button.sourceX, button.sourceY, button.sourceW, button.sourceH,
        button.x, button.y, button.bWidth, button.bHeight);
    }
})

    startMenuButs.forEach(function(button){
    if(button.draw == true){
        Menu.canvasContext.drawImage(button.img, button.sourceX, button.sourceY, button.sourceW, button.sourceH,
        button.x, button.y, button.bWidth, button.bHeight);
    }
 })
    generalButs.forEach(function(button){
        if(button.draw == true){
            Menu.canvasContext.drawImage(button.img, button.sourceX, button.sourceY, button.sourceW, button.sourceH,
            button.x, button.y, button.bWidth, button.bHeight);
        }
    })

   
            
},
  mainLoop :function() {
    Menu.clearCanvas();
    Menu.update();
    Menu.draw();
    // more frames smoother however this depends on the resources of the machine, if unable it will be laggy
    // maths 
        if(currentState == 'menu'){
            window.setTimeout(Menu.mainLoop, 1000 / 10);
        }
    },

    controls : function(){
        //--- adding the mouse position features
        Menu.canvas.addEventListener('mousedown', function(event) {
            var mousePos = Menu.getMousePos(Menu.canvas, event);
            if(currentState == 'menu'){
                Menu.checkClickOnCat(mousePos.x,mousePos.y);
            }
        }, false);

        // Checking collision between start button and mouse click
        Menu.canvas.addEventListener('click', function(event) {
        var mousePos = Menu.getMousePos(Menu.canvas, event);

        }, false);
    }
}








