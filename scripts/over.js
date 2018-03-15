var Over = {
    canvas : undefined,
    canvasContext : undefined,
    start : function () 
    {     
        Over.canvas = document.getElementById('myCanvas');
        Over.canvasContext = Over.canvas.getContext('2d');
      

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
            
    },
    mainLoop :function() {
        console.log('Over');
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
            if(currentState == 'Over'){
                Over.checkClickOnCat(mousePos.x,mousePos.y);
            }
        }, false);

        // Checking collision between start button and mouse click
        Over.canvas.addEventListener('click', function(event) {
        var mousePos = Over.getMousePos(Over.canvas, event);

        }, false);
    }
    
}