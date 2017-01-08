/**
 * Created by junior on 08/01/17.
 */

var player1, player2;
var frame = 60;
var gravidade = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    select("body").style("margin", "0px");
    select("canvas").position(0, 0);
    player1 = new Player(100, 100, 0, 0, 255);
    player2 = new Player(300, 100, 255, 155, 255);
}

function draw() {
    background(200);
    frameRate(frame);
    player1.pintar();
    player2.pintar();
    player1.cair(gravidade);
    player2.cair(gravidade);
    player1.mover();
    player2.mover();
}

function keyPressed() {
    //Player 1
    if(key == "W"){
        player1.pular();
    }
    if(key == "A"){
        player1.wasd[1] = true;
    }
    if(key == "D"){
        player1.wasd[3] = true;
    }

    //Player 2
    if(keyCode == UP_ARROW){
        player2.pular();
    }
    if(keyCode == LEFT_ARROW){
        player2.wasd[1] = true;
    }
    if(keyCode == RIGHT_ARROW){
        player2.wasd[3] = true;
    }
}

function keyReleased() {
    //Player 1
    if(key == "A"){
        player1.wasd[1] = false;
    }
    if(key == "D"){
        player1.wasd[3] = false;
    }

    //Player 2
    if(keyCode == LEFT_ARROW){
        player2.wasd[1] = false;
    }
    if(keyCode == RIGHT_ARROW){
        player2.wasd[3] = false;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}