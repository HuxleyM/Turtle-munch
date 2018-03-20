var Over = {
    canvas : undefined,
    canvasContext : undefined,
    //------- pairing to controls 
    getMousePos : function(canvas, evt) {
        var rect = Over.canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    },
    checkClickOn : function(mouseX, mouseY) {
        // if being closed change else to the rest of this
        if(mouseX < PlayAgainBut.x + PlayAgainBut.bWidth &&
            mouseX > PlayAgainBut.x &&
            PlayAgainBut.y < mouseY  &&
            PlayAgainBut.bHeight + PlayAgainBut.y > mouseY){
                // this restarts the game, automatically pointing to menu start
                    location.reload(true);  
            }
        },
    
    start : function () 
    {     
        Over.canvas = document.getElementById('myCanvas');
        Over.canvasContext = Over.canvas.getContext('2d');
        CloseBut.draw = false;
         //adding start buttons
         overMenuButs.forEach(function(button){
            button.img = new Image();
            button.img.src = 'sprites/buttons.png';
        });

        //adding general buttons (sound and close)
        generalButs.forEach(function(button){
            button.img = new Image();
            button.img.src = 'sprites/buttons.png';
        });
    
        //--- background
        Background.img = new Image();
        Background.img.src = 'backgrounds/dead.jpg';

        Over.controls();
        Over.mainLoop();
    },
    clearCanvas : function () {
        Over.canvasContext.clearRect(0, 0, Over.canvas.width, Over.canvas.height);
    },
    update : function () 
    {   
     
    },
    draw : function () 
    {       //void ctx.drawImage(image, dx, dy, dWidth, dHeight);
                //Over.canvasContext.drawImage(Ship.img, Ship.x, Ship.y, Ship.width, Ship.height);
                Menu.canvasContext.drawImage(Background.img, 0, 0, Menu.canvas.width, Menu.canvas.height);

                overMenuButs.forEach(function(button){
                    if(button.draw == true){
                        Over.canvasContext.drawImage(button.img, button.sourceX, button.sourceY, button.sourceW, button.sourceH,
                        button.x, button.y, button.bWidth, button.bHeight);
                    }
                 })
                generalButs.forEach(function(button){
                    if(button.draw == true){
                        Over.canvasContext.drawImage(button.img, button.sourceX, button.sourceY, button.sourceW, button.sourceH,
                        button.x, button.y, button.bWidth, button.bHeight);
                    }
                })
                
                Over.canvasContext.fillStyle = '#000';
                Over.canvasContext.font = '80px sans-serif';
                Over.canvasContext.textBaseline = 'top'; 
                Over.canvasContext.fillText("GAME OVER", 50, 200);
                Over.canvasContext.font = '40px sans-serif';
                Over.canvasContext.textBaseline = 'top'; 
                Over.canvasContext.fillText("your score: "+ Game.score , 50, 500);
            
    },
    mainLoop :function() {
        Over.clearCanvas();
        Over.update();
        Over.draw();
        // more frames smoother however this depends on the resources of the machine, if unable it will be laggy
        // maths 
        //console.log('Over Js');
            if(currentState == 'over'){
                window.setTimeout(Over.mainLoop, 1000 / 10);
            }
        },

    controls : function(){
        //--- adding the mouse position features
        Over.canvas.addEventListener('mousedown', function(event) {
            var mousePos = Over.getMousePos(Over.canvas, event);
            if(currentState == 'over'){
                Over.checkClickOn(mousePos.x,mousePos.y);
            }
        }, false);

        // Checking collision between start button and mouse click
        Over.canvas.addEventListener('click', function(event) {
        var mousePos = Over.getMousePos(Over.canvas, event);

        }, false);
    }
    
}