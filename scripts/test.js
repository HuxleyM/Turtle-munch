
// var object1 ={
//     hello : function(){
//         console.log('hello');
//     }
// }


// mainLoop(object1);

// function mainLoop(object){
//     object.hello();
//     window.setTimeout(mainLoop(object), 1500 / 10);
//     /*object.clearCanvas();
//     object.update();
//     object.draw();
//     if(currentState == 'game'){
//         window.setTimeout(object.mainLoop, 1500 / 10);
//     }*/
// }



function recursive(counter){
    if(counter < 10){
        counter++;
        console.log(counter);
        recursive(counter);
    }
    else{
        console.log('blast off!!');
    }
}