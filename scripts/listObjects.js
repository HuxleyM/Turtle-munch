// ----- Game objects and charcaters
//------ PLAY STATE
var Player = {
    height: 30,
    width : 30,
}

function Sprite(spriteW, spriteH, cycle, frames, xPos, yPos) {
    this.spriteW = spriteW;
    this.spriteH = spriteH;
	this.cycle = cycle;
	this.frames = frames;
	this.xPos = xPos;
	this.yPos = yPos;
}
//---------- making buttons
function Button(sourceW, sourceH, sourceX, sourceY) {
    this.sourceW = sourceW;
    this.sourceH = sourceH;
	this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.width = 200;
    this.height = 50;
}

var StartBut =  new Button(200,50,0, 71);
var CreditsBut =  new Button(200,50,0, 129);
var AboutBut =  new Button(200,50,0, 184);
var NextBut =  new Button(200,50,0, 240);
var PlayAgainBut =  new Button(200,50,0, 298);

var 
startMenuButs = [],
nextMenuButs = [],
overMenuButs =[];
startMenuButs.push(StartBut,CreditsBut,AboutBut);
nextMenuButs.push(NextBut);
overMenuButs.push(PlayAgainBut);



