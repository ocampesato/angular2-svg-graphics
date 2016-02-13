import {Component} from 'angular2/core';

@Component({
 selector: 'graphics',
 template: `<svg id="svg" width="800" height="500">
            </svg>
           `
})
export class LissajousTubeSkew1Ellipses1 {
   constructor() {
      this.graphics();
   } 

   graphics() {
     var svgns = "http://www.w3.org/2000/svg";
     var svg   = document.getElementById("svg");
     var colors = ["#ff0000", "#0000ff"];

     var basePointX  = 440,  basePointY  = 200;
     var currentX    = 0,    currentY    = 0;
     var offsetX     = 0,    offsetY     = 0;
     var majorX      = 30,   majorY      = 50;
     var Constant    = 0.25, angle       = 0;
     var A           = 200,  B           = 2;
     var C           = 100,  D           = 5;
     var deltaAngle  = 1,    maxAngle    = 721;
     var stripWidth  = 20,   currStrip   = 0;
     var factor      = 1,    factors     = [0.5,1];
     var radius      = 0;
 
     for(angle=0; angle<maxAngle; angle+=deltaAngle) {
        offsetX  = A*Math.sin(B*angle*Math.PI/180);
        offsetY  = C*Math.cos(D*angle*Math.PI/180);
        currentX = basePointX+offsetX;
        currentY = basePointY-offsetY;
   
        currStrip = Math.floor(angle/stripWidth);
        factor = factors[currStrip % factors.length];

        var ellipse = document.createElementNS(svgns, "ellipse");
        ellipse.setAttribute("cx", currentX);
        ellipse.setAttribute("cy", currentY);
        ellipse.setAttribute("rx", factor*majorX);
        ellipse.setAttribute("ry", factor*majorY);
      //ellipse.setAttribute("transform", "rotate("+(2*angle/majorX)+")");
      //ellipse.setAttribute("transform", "scale("+(angle/maxAngle)+")");
        ellipse.setAttribute("transform", "skewX("+(-angle%majorX)+")");
        ellipse.setAttribute("fill", colors[angle % colors.length]);
        svg.appendChild(ellipse);
     } 
   } 
}

