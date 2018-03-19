"use strict";

var Menu = {
	canvas : undefined,
    canvasContext : undefined,
    startMenuButtons : [],



    //------- pairing to controls 
    getMousePos : function(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    },

    checkClickOnCat : function(mouseX, mouseY) {
        if (mouseX < Cat.x + Cat.width &&
        mouseX > Cat.x &&
        Cat.y < mouseY  &&
        Cat.height + Cat.y > mouseY) {
        // collision detected!
            console.log('you clicked cat');
            currentState ='game';
            controlState('play');
         }

         else if(mouseX < Dog.x + Dog.width &&
            mouseX > Dog.x &&
            Dog.y < mouseY  &&
            Dog.height + Dog.y > mouseY){
                console.log('you clicked dog');
            }
    
    },
     
    
    start : function () 
    {     
        Menu.canvas = document.getElementById('myCanvas');
        Menu.canvasContext = Menu.canvas.getContext('2d');
        
        //adding buttons
        startMenuButs.forEach(function(button){
            button.img = new Image();
            button.img.src = 'buttons.png';
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
           for(var i = 0; i < startMenuButs;i++){
               var button = startMenuButs[i];
               Menu.canvasContext.drawImage(button.img, 
               button.sourceX, button.sourceY, button.sourceWidth, button.sourceHeight,
               200, 100, 200, 100
             );
           }
            
},
  mainLoop :function() {
    Menu.clearCanvas();
    Menu.update();
    Menu.draw();
    // more frames smoother however this depends on the resources of the machine, if unable it will be laggy
    // maths 
    //console.log('menu Js');
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








