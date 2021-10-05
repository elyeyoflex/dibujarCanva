//usar evento mouseDOWN y mouseup
//console.log( eventos);// asi veo mousedown. para ver cual dispara las coordenadas
// ver las coordenadas si son de la pantalla, del documento o del canvas
//

document.addEventListener("keydown", dibujarTeclado);

document.addEventListener("mousemove", moverMouse);


var tablero = document.getElementById("canvas");
var papel = tablero.getContext("2d");

var x, y;
var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39};
var mouse = 0;

//dibujarLinea("blue", x-1, y-1, x+1,y+1, papel);


function moverMouse(evento){
  if(evento.buttons == 1){
    dibujarLinea("blue", x, y, evento.layerX,evento.layerY, papel);
  }
  x=evento.layerX;
  y=evento.layerY;
}



function dibujarLinea(color, xi, yi, xf, yf, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento){
  var color = "blue";
  var movimiento = 1;
  console.log(evento);
  /*
  if (evento.keyCode == teclas.RIGHT){
    if (evento.keyCode == teclas.UP ){
      dibujarLinea(color, x, y, x + movimiento, y - movimiento, papel);
      x= x + movimiento;
      y= y - movimiento;
    }
  }
*/

  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(color, x, y, x, y - movimiento, papel);
      y= y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(color, x, y, x, y + movimiento, papel);
      y= y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(color, x, y, x - movimiento, y, papel);
      x= x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(color, x, y, x + movimiento, y, papel);
      x= x + movimiento;
    break;

  }

}
