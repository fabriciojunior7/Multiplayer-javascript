/**
 * Created by junior on 08/01/17.
 */

function Player(x, y, r, g, b) {
    //Atributos
    this.x = x;
    this.y = y;
    this.raio = width * 0.02;
    this.diametro = this.raio * 2;
    this.velocidadeX = 5;
    this.velocidadeY = 0;
    this.forcaPulo = 20;
    this.r = r;
    this.g = g;
    this.b = b;
    this.wasd = [false, false, false, false];

    //Metodos
    this.pintar = function () {
        this.largura = width*0.02;
        this.altura = width*0.02;
        fill(255);
        strokeWeight(3);
        stroke(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.raio, this.raio);
    };

    this.cair = function (gravidade) {
        if(this.y > (height - this.raio) && this.velocidadeY != 0){
            this.velocidadeY = 0;
            this.y = height - this.raio;
        }
        else if(this.y < (height - this.raio)){
            this.velocidadeY += gravidade;
            this.y += this.velocidadeY;
        }
    };
    
    this.mover = function () {
        if(this.wasd[1] == true){
            this.x -= this.velocidadeX;
        }
        if(this.wasd[3] == true){
            this.x += this.velocidadeX;
        }

    };

    this.pular = function () {
        this.y -= 1;
        this.velocidadeY -= this.forcaPulo;
    };
}
