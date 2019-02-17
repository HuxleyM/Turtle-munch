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

        window.addEventListener('keyup', function(event){
            //console.log('pressed');
            if(event.keyCode == 80){
                if(Sound.mute === true){
                    //turn on
                    console.log('on' + Sound.mute);
                    Sound.checkMuted(1);
                    Sound.mute = false;
                }
                else {
                console.log('off'+ Sound.mute)
                  Sound.checkMuted(0);
                  Sound.mute = true;
                }
            }
        }, true);
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
            case 40: 
                if(currentState == 'game'){
                    if(Player.y > 0){
                        Player.y +=5;
                    }
                }
                break;
            default: 
                //console.log(key);
                break;
        } 
        //console.log(currentState + Keys.key);
    },
    
    handleUpKey: function(){
        Keys.press = false;
    }
}