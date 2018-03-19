//  key controls

var keys = {
    keys: {
        UA:38,  SB:40
    }
}
window.addEventListener('keydown', function(event){
    if(event.keyCode == Game.keys.SP || event.keyCode == Game.keys.UA){
        if(Player.yPos > 0){
            Player.yPos-=5;
        }
    }
  },true);

  window.addEventListener('keyup', function(event){
    if(event.keyCode == Game.keys.SP || event.keyCode == Game.keys.UA){
        Player.yPos = Player.yPos;
    }
  },true);