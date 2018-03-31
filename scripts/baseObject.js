"use strict"

baseObject = object.create(object.prototype,{

    arrayDraw : function(array){
        array.forEach(function(button){
            if(button.draw == true){
                canvasContext.drawImage(button.img, button.sourceX, button.sourceY, button.sourceW, button.sourceH,
                button.x, button.y, button.bWidth, button.bHeight);
            }
        })
    },

    drawSingle: function(object){
        canvasContext.drawImage(object.img, 0, 0, canvas.width, canvas.height);
    },

    clearCanvas: function() {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    },

    // src may mess this up
    makeImage: function(array, src){
        array.forEach(function(button, src){
            button.img = new Image();
            button.img.src = src;
        }); 
    }
})