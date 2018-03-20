
var tempTimer = 0;

var Next ={
    canvas : undefined,
    canvasContext : undefined,
    nextMenuButtons : [],
    
    //------- pairing to controls 
      getMousePos : function(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    },
    checkClickOn : function(mouseX, mouseY) {
        // if being closed change else to the rest of this
        if(mouseX < NextBut.x + NextBut.bWidth &&
            mouseX > NextBut.x &&
            NextBut.y < mouseY  &&
            NextBut.bHeight + NextBut.y > mouseY){
                // if clicked start playing again.
                    controlState('play');
            }
        },
    

    start : function () 
    {     
        Next.canvas = document.getElementById('myCanvas');
        Next.canvasContext = Next.canvas.getContext('2d');

        // adding next button
         //adding start buttons
         nextMenuButs.forEach(function(button){
            button.img = new Image();
            button.img.src = 'sprites/buttons.png';
        });
        //-- adding to array for next level
        inPlay.push(new Plastic, new Plastic, new JellyFish);

        // if certain levels make some enemies move 
        if(level % 4 == 0){
            Game.inPlay.forEach(function(enemy){
                enemy.move += 1.5;
            })
        }
        //--- adding background
        Background.img = new Image();
        Background.img.src = 'backgrounds/next.jpg';

        Next.controls();
        Next.mainLoop();
    },
    clearCanvas : function () {
        Next.canvasContext.clearRect(0, 0, Next.canvas.width, Next.canvas.height);
    },
    update : function () 
    {   
        tempTimer++;
        if(tempTimer>200){
            level++;
            controlState('play');
        }
    },
    draw : function () 
    {       
        Menu.canvasContext.drawImage(Background.img, 0, 0, Menu.canvas.width, Menu.canvas.height);
        //void ctx.drawImage(image, dx, dy, dWidth, dHeight);
        //Next.canvasContext.drawImage(Ship.img, Ship.x, Ship.y, Ship.width, Ship.height);
        nextMenuButs.forEach(function(button){
            if(button.draw == true){
                Menu.canvasContext.drawImage(button.img, button.sourceX, button.sourceY, button.sourceW, button.sourceH,
                button.x, button.y, button.bWidth, button.bHeight);
            }
            })
    },
    mainLoop :function() {
        Next.clearCanvas();
        Next.update();
        Next.draw();
        // more frames smoother however this depends on the resources of the machine, if unable it will be laggy
        // maths 
        //console.log('Next Js');
            if(currentState == 'next'){
                window.setTimeout(Next.mainLoop, 1000 / 10);
            }
        },

    controls : function(){
        //--- adding the mouse position features
        Next.canvas.addEventListener('mousedown', function(event) {
            var mousePos = Next.getMousePos(Next.canvas, event);
            if(currentState == 'next'){
                Next.checkClickOn(mousePos.x,mousePos.y);
            }
        }, false);

        // Checking collision between start button and mouse click
        Next.canvas.addEventListener('click', function(event) {
        var mousePos = Next.getMousePos(Next.canvas, event);

        }, false);
    }
}