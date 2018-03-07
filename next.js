
var tempTimer = 0;

var Next ={
    canvas : undefined,
    canvasContext : undefined,

    start : function () 
    {     
        Next.canvas = document.getElementById('myCanvas');
        Next.canvasContext = Next.canvas.getContext('2d');
      

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
    {       //void ctx.drawImage(image, dx, dy, dWidth, dHeight);
                //Next.canvasContext.drawImage(Ship.img, Ship.x, Ship.y, Ship.width, Ship.height);
            
    },
    mainLoop :function() {
        console.log('Next');
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
            if(currentState == 'Next'){
                Next.checkClickOnCat(mousePos.x,mousePos.y);
            }
        }, false);

        // Checking collision between start button and mouse click
        Next.canvas.addEventListener('click', function(event) {
        var mousePos = Next.getMousePos(Next.canvas, event);

        }, false);
    }
}