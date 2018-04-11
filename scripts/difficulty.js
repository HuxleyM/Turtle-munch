"use strict";

var Difficulty = {
    arrayMax : false,
    level : 1,
    shark: false,

    update: function(){
        this.level++;
        this.gameArray();
        this.floatingEnemies();
        this.rainbowFishlives();
    },

    gameArray : function(){
        //-- adding to array for next level
        if(inPlay.length < 12){
            inPlay.push(new Plastic(), new JellyFish());
        }
        else{
            this.arrayMax = true;
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
        if(Game.lives < 3 && Game.score > (Difficulty.level * 400)){
            Game.inPlay.push(new RainbowFish());
        }
    },

    addShark : function(){
        if(this.arrayMax){
            this.shark == true;
            Game.inPlay.push(new Shark());
        }
        // logic to add shark
    }
}