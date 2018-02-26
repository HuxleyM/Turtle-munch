"use strict";

var Ship ={
    height: 30,
    width: 30,
    x : 200,
    y : 100,
}
var Menu = {
	canvas : undefined,
    canvasContext : undefined,   
    start : function () 
    {     
        Menu.canvas = document.getElementById('myCanvas');
        Menu.canvasContext = Menu.canvas.getContext('2d');
        Ship.img = new Image();
        Ship.img.src = "spaceship.png";
        Menu.mainLoop();
    },
    clearCanvas : function () {
        Menu.canvasContext.clearRect(0, 0, Menu.canvas.width, Menu.canvas.height);
    },
    update : function () 
{   
	// ades says ' that remeber
    // Menu.cycle adding plus one everytime updatetakes places, then modulus - remainder divide by 'computer' number of frames
    Ship.y--;
    if (Ship.y + Ship.height < 0){
        Game.start();
        currentState = 'game';
        return;
    }
    else{
        currentState = 'menu';
    }
},
    draw : function () 
{       //void ctx.drawImage(image, dx, dy, dWidth, dHeight);
			Menu.canvasContext.drawImage(Ship.img, Ship.x, Ship.y, Ship.width, Ship.height);
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
    }
}








