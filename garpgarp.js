"use strict";


function Sprite(spriteW, spriteH, cycle, frames, xPos, yPos) {
    this.spriteW = spriteW;
    this.spriteH = spriteH;
	this.cycle = cycle;
	this.frames = frames;
	this.xPos = xPos;
	this.yPos = yPos;
}

var Garp =  new Sprite(98,83,0,4,200,100);

console.log(typeof Garp);
var Game = {
	canvas : undefined,
    canvasContext : undefined, 
    start : function () 
    {     
        currentState = 'game';
        Game.canvas = document.getElementById('myCanvas');
        Game.canvasContext = Game.canvas.getContext('2d');
        Garp.img = new Image();
        Garp.img.src = "garpOne.png";
        Game.mainLoop();
    },
    clearCanvas : function () {
        Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
    },
    update : function () 
{   
	// ades says ' that remeber
	// game.cycle adding plus one everytime updatetakes places, then modulus - remainder divide by 'computer' number of frames
    Garp.cycle = (Garp.cycle + 1) % Garp.frames;
    
},
    draw : function () 
{ 
			Game.canvasContext.drawImage(Garp.img,
            // source rectangle
            Garp.cycle * Garp.spriteW, 0, Garp.spriteW, 
            Garp.spriteH,
            // destination rectangle
            Garp.xPos, Garp.yPos, Garp.spriteW, Garp.spriteH);
},
    mainLoop :  function() {
        console.log('game');
        Game.clearCanvas();
        Game.update();
        Game.draw();
        // more frames smoother however this depends on the resources of the machine, if unable it will be laggy
        // maths 
        //console.log('game Js');
        if(currentState == 'game'){
            window.setTimeout(Game.mainLoop, 1500 / 10);
        }
    }
}





