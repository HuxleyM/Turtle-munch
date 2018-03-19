
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
PlayAgainBut =  new Button(200, 50, 0, 298, 200, 50, 200, 100),
CloseBut =      new Button(54,  54, 76, 2, 50, 50, 300, 300),
SoundBut =      new Button(60, 60, 0, 0, 30, 30, 550, 20);

// we want our close button to not appear at first and only appear once triggered
CloseBut.draw = false;

var 
startMenuButs = [],
nextMenuButs = [],
generalButs = [],
overMenuButs =[];
generalButs.push(SoundBut,CloseBut);
startMenuButs.push(StartBut,CreditsBut,AboutBut);
nextMenuButs.push(NextBut);
overMenuButs.push(PlayAgainBut);

//------------------------- made buttons
//-------------------------  making info to go with buttons
//------------------------- game variables 

var Background ={
    // this is empty for now, and is intialized in the game object.
}

var Player = {
 
}