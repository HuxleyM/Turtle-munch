"use strict"

var Sound = {
    mute: false,
    audio : undefined,
    playing: false,

    start: function(){
        if(this.playing){
            this.audio.pause();
            this.playing = false;
            this.background();
        }
        else{
            this.background();
        }
    },

    checkMuted: function(){
        if(this.mute){
            Sound.audio.volume = 0;
        }
        else{
            Sound.audio.volume = 0.8;
        }
    },

    background: function(){
        this.playing = true;

        if(currentState == 'game'){
           this.audio = startAudio;
        }
        else{
            this.audio = overAudio;
        }
        Sound.play();
    },

    play : function(){
            var audio = this.audio;
            // ok so this is gonna just keep looping until the end.
            audio.addEventListener('ended', function() {


                this.currentTime = 0;
                audio.play();
                this.playing = true;
            }, false);
            audio.play();
    },
}