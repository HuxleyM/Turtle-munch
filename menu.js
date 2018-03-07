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
        Ship.img = new Image();
        Ship.img.src = "spaceship.png";
        // adding cat and dog for button click
        Cat.img = new Image();
        Cat.img.src = 'cat.png';
        Dog.img = new Image();
        Dog.img.src = 'dog.png';

        Menu.controls();

        Menu.mainLoop();
    },
    clearCanvas : function () {
        Menu.canvasContext.clearRect(0, 0, Menu.canvas.width, Menu.canvas.height);
    },
    update : function () 
{   
	// ades says ' that remeber
    // Menu.cycle adding plus one everytime updatetakes places, then modulus - remainder divide by 'computer' number of frames
    /*Ship.y-= 10;
    if (Ship.y + Ship.height < 0){
        Game.start();
        currentState = 'game';
        return;
    }
    else{
        
    }*/
},
    draw : function () 
{       //void ctx.drawImage(image, dx, dy, dWidth, dHeight);
            //Menu.canvasContext.drawImage(Ship.img, Ship.x, Ship.y, Ship.width, Ship.height);
            Menu.canvasContext.drawImage(Cat.img, Cat.x, Cat.y, Cat.width, Cat.height);
            Menu.canvasContext.drawImage(Dog.img, Dog.x, Dog.y, Dog.width, Dog.height);
            
},
  mainLoop :function() {
    console.log('menu');
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








