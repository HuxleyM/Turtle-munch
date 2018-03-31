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

    // not working with Tribe called Quest  :(
    volumeMute : function(x){
        console.log('i tried!' + this.audio)
        Sound.audio.volume = x;
    }
}