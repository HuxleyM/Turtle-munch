"use strict"

var Highscore = {  
    name: undefined,
    highscore: 0,

    current: function(){
        if(document.cookie){
            console.log(document.cookie);
            this.name = this.fetchCookie('name');
            this.highscore = this.fetchCookie('score');
        }
        else{
            console.log("no cookies set");
            document.cookie = 'name = masterTurtle ;';
            document.cookie = 'score = 300;';
        }
    },

    check : function(score){

       
        if(score > this.highscore){
            this.highscore = score;
            var name = prompt('You have the highest score! save your name!');
            document.cookie = 'name = '+ name +';';
            document.cookie = 'score = '+ this.highscore +';';
        }

    },
    fetchCookie : function(cookieName){
        var name = cookieName + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
}