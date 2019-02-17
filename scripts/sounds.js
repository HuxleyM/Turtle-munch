"use strict"

var Sound = {
    mute: false,
    audio : undefined,
    playing: false,

    
    // starts the audio function
    start: function(){
        if(this.playing){
            this.audio.pause();
            this.playing = false;
            console.log(Sound);
            this.background();
        }
        else if (!this.playing){
            this.background();
        }
        else{
            console.log('sound error');
        }
    },

    //checks wether muted or not
    checkMuted: function(x){
            Sound.audio.volume = x;
            this.changeSymbol();
    },

    changeSymbol: function(){
        if(this.mute){
            SoundBut.sourceW = 80;
            SoundBut.sourceH = 67;
            SoundBut.sourceX = 0;
            SoundBut.sourceY = 0;
          
        }
        else{
            SoundBut.sourceW = 60;
            SoundBut.sourceH = 63;
            SoundBut.sourceX = 82;
            SoundBut.sourceY = 3;
        }
    },
    // decides which background music to choose
    background: function(){
        if(currentState == 'game'){
           this.audio = startAudio;
        }
        else {
            this.audio = overAudio;
        }
        Sound.play();
    },

    // this loops the sound sprites
    play : function(){

            var audio = this.audio;
            // ok so this is gonna just keep looping until the end.
            audio.addEventListener('ended', function() {
                this.currentTime = 0;
                audio.play();
            }, false);

            audio.play();
            this.playing = true;
    },
}