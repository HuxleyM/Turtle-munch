// ----- Game objects and charcaters
//------ PLAY STATE

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
var charactersInPlay = [];
var Garp1 =  new Sprite(98,83,0,4,600,200);
var Garp2 = new Sprite(40,83,0,4,550,200);
var Garp3 = new Sprite(98,40,0,4,560,300);
var Garp4 = new Sprite(50,50,0,4,560,200);
var Player = new Sprite(98,83,0,1,560,200)




var Background ={
backgroundImage : undefined,
backgroundImageWidth: undefined,
backgroundImageHeight : undefined,
}


//--- Menu State

function ButtonMaker(width, height, xPos, yPos){
    this.width = width;
    this.height = height;
    this.xPos = xPos;
    this.yPos = yPos;
}

//----- start menue

var Ship ={
    height: 30,
    width: 30,
    x : 200,
    y : 100,
}

var Dog ={
    height: 100,
    width: 100,
    x : 100,
    y : 100,
}

var Cat ={
    height: 100,
    width: 100,
    x : 300,
    y : 100,
}