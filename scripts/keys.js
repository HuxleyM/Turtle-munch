"use strict";

var Keys = {
    key: null,
    press : false,
    
    start : function(){
        // we are using the self var here to reference to this object
        // as opposed to the window object
        var self = this;
        window.addEventListener('keydown', function(event){
            self.key = event.keyCode;
            //console.log(self.key);
            self.press = true;
            self.handleDownKey();
        }, true);
        window.addEventListener('keyUp', Keys.handleUpKey(currentState), true);
    },
    handleDownKey : function(){
        var key = Keys.key;

        switch(key){
            case 38:
                if(currentState == 'game'){
                    if(Player.y > 0){
                        Player.y -=5;
                    }
                }
                break;
            case 32:
                if(currentState == 'game'){
                    if(Player.y > 0){
                        Player.y -=5;
                    }
                }
                break;
            case 80:
                if(Sound.mute){
                    Sound.volumeMute(0.8);
                    Sound.mute = false;
                }
                else{
                  Sound.volumeMute(0);
                  Sound.mute = true;
                }
                break;
            default: 
                break;
        } 
        //console.log(currentState + Keys.key);
    },
    
    handleUpKey: function(){
        Keys.press = false;
    }
}