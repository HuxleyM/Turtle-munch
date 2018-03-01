"use strict";


function Sprite(spriteW, spriteH, cycle, frames, xPos, yPos) {
    this.spriteW = spriteW;
    this.spriteH = spriteH;
	this.cycle = cycle;
	this.frames = frames;
	this.xPos = xPos;
	this.yPos = yPos;
}

//------ initializing  sprites to play with
var availableCharacters = [];
var charactersInPlay=[];
var charactersOutOfPlay = [];
var Garp1 =  new Sprite(98,83,0,4,200,100);
var Garp2 = new Sprite(40,83,0,4,350,200);
var Garp3 = new Sprite(98,40,0,4,400,500);
var Garp4 = new Sprite(50,50,0,4,400,100);
var Player = new Sprite(98,83,0,1,400,100)
availableCharacters.push(Garp1,Garp2,Garp3,Garp4);


var Background ={
backgroundImage : undefined,
backgroundImageWidth: undefined,
backgroundImageHeight : undefined,
}


var Game = {
	canvas : undefined,
    canvasContext : undefined, 
    x: 0,
    y: 0,
    maximumHeight: undefined,
    maximumWidth: undefined,
    delta_y: undefined,
    delta_x: undefined,
    randomizeYPos: function(){
        return Math.floor((Math.random() * Game.canvas.height) + 1);
    },
    start : function () 
    {     
        currentState = 'game';
        Game.canvas = document.getElementById('myCanvas');
        Game.canvasContext = Game.canvas.getContext('2d');
        Background.backgroundImage = new Image();
        Background.backgroundImage.src='background.jpg';
            // we need to make x and y varibales for b and g or else everything is pusshe dof
        Background.x = Game.x;
        Background.y = Game.y;
        //the global varibales will automatically append as they are not in any object.
        Background.maximumWidth = Game.canvas.width;
        Background.maximumHeight = Game.canvas.height;
        Background.delta_x= - 5; ///--------------------------- changed this for object
        Background.delta_y= - 0.5;
        // sprite source matching
        Garp1.img = new Image();
        Garp1.img.src = "garpOne.png";
        Garp2.img = new Image();
        Garp2.img.src = "garpOne.png";
        Garp3.img = new Image();
        Garp3.img.src = "garpOne.png";
        Garp4.img = new Image();
        Garp4.img.src = "garpOne.png";
        // player
        Player.img = new Image();
        Player.img.src = "garpOne.png";
        // characters in play
        charactersInPlay = availableCharacters.splice(1,3);
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
        Game.canvasContext.fillText("score ",200,0);
    },
    clearCanvas : function () {
        Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
    },
    update : function () 
{   

   if(charactersInPlay.length < 3){
        //var choiceOfChar = Math.floor(Math.random()* availableCharacters.length);// this is always returning 0
        console.log('length'+availableCharacters.length);
        availableCharacters[0].xPos = 600;
        availableCharacters[0].yPos = Game.randomizeYPos();
        //availableCharacters[choiceOfChar].yPos -= availableCharacters[choiceOfChar].spriteH;
        // this is the problems here 
        charactersInPlay.splice(2,0,availableCharacters[0]);
        //availableCharacters.splice(0,1);
}

        Background.x += Background.delta_x;
        // if background distancex is greater then backgrounds maximum width then start again!
        if(Background.x <= - Background.maximumWidth){
            Background.x = Game.x;
        }
        // ades says ' that remeber
        // game.cycle adding plus one everytime updatetakes places, then modulus - remainder divide by 'computer' number of frames
        for(var i = 0; i< charactersInPlay.length; i++){
            charactersInPlay[i].xPos -= 5;
            charactersInPlay[i].cycle = (charactersInPlay[i].cycle + 1) % charactersInPlay[i].frames;
            //-- trying to make move from out of play
                      //- removing if smaller then canvas width
           if(charactersInPlay[i].xPos < 0){
                charactersInPlay.splice(i,1);
            }
            // trying to add collision function 
           /* if( charactersInPlay[i].xPos > Player.xPos && 
                charactersInPlay[i].xPos < Player.xPos + Player.spriteW && 
                charactersInPlay[i].yPos > Player.yPos && 
                charactersInPlay[i].yPos < Player.yPos + Player.spriteH) {
                console.log('collision');
            }*/
            
        //------ adding a new charcater if aout of play 
    
      
        }
    
},
    draw : function () 
{ 
            // when drawing thing about it like back to front
            Game.drawBackground();
            Game.canvasContext.drawImage(Player.img,100,Player.yPos,Player.spriteW, Player.spriteH);
            for(var i =0 ; i< charactersInPlay.length; i++){
                Game.canvasContext.drawImage(charactersInPlay[i].img,
                    // source rectangle
                    charactersInPlay[i].cycle * charactersInPlay[i].spriteW, 0, charactersInPlay[i].spriteW, 
                    charactersInPlay[i].spriteH,
                    // destination rectangle
                    charactersInPlay[i].xPos, charactersInPlay[i].yPos, charactersInPlay[i].spriteW, charactersInPlay[i].spriteH);
                    
            }    
},
    mainLoop :  function() {
        Game.clearCanvas();
        Game.update();
        Game.draw();
        // more frames smoother however this depends on the resources of the machine, if unable it will be laggy
        // maths 
        //console.log('game Js');
        if(currentState == 'game'){
            window.setTimeout(Game.mainLoop, 800 / 10);
        }
    }
}
