"use strict"

var Mouse = {
    click: false,
    mousePos: undefined,

    // this is adding controls to the state
    start : function(){
        Mouse.controls();
    },

    // this is adding an event listners to the canvas
    controls : function(){
      //--- adding the mouse position features
      canvas.addEventListener('mousedown', function(event) {
            Mouse.mousePos = Mouse.getMousePos(canvas, event);
            // setting click to true to indicate object to check
            Mouse.click = true;
         }, false);
    },

    // this is finding the mouse x and y every click
    getMousePos : function(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    },

    // this will return a boolean as to wether the mouse 
    // has collided with buttons 

    checkClickOn : function(item) {
        if(Mouse.mousePos.x < item.x + item.bWidth &&
            Mouse.mousePos.x > item.x &&
            item.y < Mouse.mousePos.y &&
            item.bHeight + item.y > Mouse.mousePos.y){
                // reset flag
                Mouse.click = false;
                return true;
        }
    }
}