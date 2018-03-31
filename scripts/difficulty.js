"use strict";

var Difficulty = {
    arrayMax : false,
    level : 1,

    update: function(){
        this.level++;
        this.gameArray();
        this.floatingEnemies();
        this.rainbowFishlives();
    },

    gameArray : function(){
        //-- adding to array for next level
        if(inPlay.length < 10){
            inPlay.push(new Plastic, new JellyFish);
        }
        else{
            arrayMax = true;
        }
    },

    floatingEnemies : function(){
        if(this.level % 4 == 0){
            Game.inPlay.forEach(function(enemy){
                enemy.move += 1.5;
            })
        }
        else{Game.inPlay.forEach(function(enemy){
            enemy.move = 0;
        })}
    }, 

    rainbowFishlives : function(){
        if(Game.score > (this.level * 400) && Game.lives < 2){
            inPlay.push(new RainbowFish());
        }
    },

    addShark : function(){
        // logic to add shark
    }
}