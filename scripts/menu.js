"use strict";

var Menu = {

    checkClick: function() {
        // if being closed change else to the rest of this
        if(Mouse.checkClickOn(CloseBut)){
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
                var button = startMenuButs[i];

                if(Mouse.checkClickOn(button)){
                    // change all draw state to false
                    startMenuButs.forEach(function(button){
                        button.draw = false;
                    });
                    // change close button to true
                    CloseBut.draw = true;
                    // write correct info display
                    if(button == StartBut){
                        CloseBut.draw = false;
                        controlState('game')
                    }
                    else if(button == CreditsBut){
                       
                        CreditsInfo.draw = true;
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
        //--- background
        Background.img.src = 'backgrounds/background.png';
        
        // initiating start
        Menu.initiateImages(startMenuButs, 'sprites/buttons.png');
        Menu.initiateImages(info, 'sprites/buttons.png');
        Menu.initiateImages(generalButs, 'sprites/buttons.png');
        Sound.start();
        Menu.mainLoop();
    },

    initiateImages : function(array, src){
        array.forEach(function(item){
            item.img = new Image();
            item.img.src = src;
        });
    },

    clearCanvas : function () {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    },

    update : function () 
        { 
        if(Mouse.click){
            Menu.checkClick();
        }
    },
    draw : function () 
{   
    canvasContext.drawImage(Background.img, 0, 0, canvas.width, canvas.height);
    Menu.drawButton(info);
    Menu.drawButton(startMenuButs);
    Menu.drawButton(generalButs);
       
},
  drawButton : function(array){
    array.forEach(function(item){
        if(item.draw == true){
            canvasContext.drawImage(item.img, item.sourceX, item.sourceY, item.sourceW, item.sourceH,
                item.x, item.y, item.bWidth, item.bHeight);
        }
    })     
  },
  mainLoop :function() {
    Menu.clearCanvas();
    Menu.update();
    Menu.draw();
    // more frames smoother however this depends on the resources of the machine, if unable it will be laggy
    // maths 
        if(currentState == 'start'){
            window.setTimeout(Menu.mainLoop, 1000 / 10);
        }
    },
}