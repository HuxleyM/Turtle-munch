"use strict"
//---------- making buttons
function Button(sourceW, sourceH, sourceX, sourceY, bWidth, bHeight, x, y) {
    this.sourceW = sourceW;
    this.sourceH = sourceH;
	this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.bWidth = bWidth;
    this.bHeight = bHeight;
    this.x = x;
    this.y = y;
    this.draw = true;
}

var 
StartBut =      new Button(200, 50, 0, 70, 200, 50, 200, 100),
CreditsBut =    new Button(200, 50, 0, 130, 200, 50, 200, 156),
AboutBut =      new Button(200, 50, 0, 184, 200, 50, 200, 210),
NextBut =       new Button(200, 50, 0, 240, 200, 50, 200, 100),
PlayAgainBut =  new Button(200, 50, 0, 298, 200, 50, 200, 300),
CloseBut =      new Button(54,  54, 76, 2, 50, 50, 300, 300),
SoundBut =      new Button(60, 60, 0, 0, 30, 30, 550, 20);

//--- making about boxes with the same constructor as buttons

var 
CreditsInfo =     new Button(200, 142, 0, 360, 300, 200, 150, 100),
AboutInfo =   new Button(200, 142, 0, 505, 300, 200, 150, 100);

// we want our close button to not appear at first and only appear once triggered
CloseBut.draw = false;

var 
startMenuButs = [],
nextMenuButs = [],
generalButs = [],
overMenuButs =[],
info =[];
generalButs.push(SoundBut,CloseBut);
startMenuButs.push(StartBut,CreditsBut,AboutBut);
nextMenuButs.push(NextBut);
overMenuButs.push(PlayAgainBut);
info.push(AboutInfo, CreditsInfo);

//------------------------- made buttons
//-------------------------  making info to go with buttons
//------------------------- game variables 

var Background ={
    // this is empty for now, and is intialized in the game object.
}
//-- initializing character variables
function Character(sourceW, sourceH, sourceX, sourceY, bWidth, bHeight, x, y, cycle, frames) {
    this.sourceW = sourceW;
    this.sourceH = sourceH;
	this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.bWidth = bWidth;
    this.bHeight = bHeight;
    this.x = x;
    this.y = y;
    // sprites
    this.cycle = cycle;
    this.frames = frames;

}

// same constructor as button maker
 var 
 Player = new Character(200, 146, 0, 74, 100, 75, 100, 100, 0, 4 );

 function JellyFish(){
    this.name = 'jellyfish';
    this.sourceW = 100;
    this.sourceH = 112;
	this.sourceX = 0;
    this.sourceY = 250;
    this.bWidth = 50;
    this.bHeight = 50;
    this.x = Math.floor((Math.random()*600) + (300));
    this.y = Math.floor((Math.random()*500)+1);
    // sprites
    this.cycle = 0;
    this.frames = 8;
    //movement
    this.move = 0;
 }

 function Plastic(){
    this.name = 'plastic';
    this.sourceW = 60;
    this.sourceH = 70;
	this.sourceX = 0;
    this.sourceY = 0;
    this.bWidth = 60;
    this.bHeight = 60;
    this.x = Math.floor((Math.random()*600) + (300));
    this.y = Math.floor((Math.random()*500)+1);
    // sprites
    this.cycle = 0;
    this.frames = 1;
    //movemnet
    this.move = 0;
 }
// starting enemies 2 jellfish 4 plastic
var inPlay = [new JellyFish(), new JellyFish(), new Plastic(), new Plastic(), new Plastic()];
