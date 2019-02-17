"use strict";

var Difficulty = {
    level : 1,
    superShark: false,

    update: function(){
        this.level++;
        this.gameArray();
        this.floatingEnemies();
        this.rainbowFishlives();
    },

    gameArray : function(){
        //-- adding to array for next level
        if(inPlay.length < 12){
            inPlay.push(new JellyFish(), new JellyFish(), new Plastic());
        }
        else{
            if(!this.superShark){
                this.addShark();
            }
        }
    },

    floatingEnemies : function(){
        if(this.level % 4 == 0){
            Game.inPlay.forEach(function(enemy){
                enemy.move += 1.5;
            })
        }
        else if(this.level > 4  && this.level % 3 == 0){
            Game.inPlay.forEach(function(enemy){
                enemy.move += 2;
            })
        }
        else{Game.inPlay.forEach(function(enemy){
            enemy.move = 0;
            // exception for sharks
            if(enemy.name == 'shark'){
                enemy.move = 3;
            }
        })}
    }, 

    rainbowFishlives : function(){
        if(Game.lives < 3 && Game.score > (Difficulty.level * 400)){
            Game.inPlay.push(new RainbowFish());
        }
    },

    addShark : function(){
        this.superShark == true;
        var superShark = new Shark();
        superShark.bWidth = 300;
        superShark.bHeight = 150;
        superShark.move = 0.5;
        Game.inPlay.push(superShark);
        // logic to add shark
    }
}