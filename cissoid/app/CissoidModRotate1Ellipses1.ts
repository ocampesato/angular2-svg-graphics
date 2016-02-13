import {Component} from 'angular2/core';

@Component({
 selector: 'graphics',
 template: `<svg id="svg" width="800" height="500">
            </svg>
           `
})
export class CissoidModRotate1Ellipses1 {
   constructor() {
      this.graphics();
   } 

   graphics() {
     var svgns = "http://www.w3.org/2000/svg";
     var svg   = document.getElementById("svg");
     var colors = ["#ff0000", "#0000ff"];

     var basePointX  = 440,  basePointY  = 100;
     var currentX    = 0,    currentY    = 0;
     var offsetX     = 0,    offsetY     = 0;
     var majorX      = 30,   majorY      = 50;
     var Constant    = 200,  angle       = 0;
     var sine        = 0,    cosine      = 0;
     var radius      = 0,    factor      = 1;
     var deltaAngle  = 1,    maxAngle    = 721;
     var fillColor   = "";
 
     for(angle=0; angle<maxAngle; angle+=deltaAngle) {
        sine     = Math.sin(factor*angle*Math.PI/180);
        cosine   = Math.cos(factor*angle*Math.PI/180);
        radius   = Constant*sine*sine/cosine;
 
        offsetX  = radius*Math.cos(angle*Math.PI/180);
        offsetY  = radius*Math.sin(angle*Math.PI/180);
        currentX = basePointX+offsetX;
        currentY = basePointY-offsetY;
   
        var ellipse = document.createElementNS(svgns, "ellipse");
        ellipse.setAttribute("cx", currentX);
        ellipse.setAttribute("cy", currentY);
        ellipse.setAttribute("rx", angle%majorX);
        ellipse.setAttribute("ry", majorY);
        ellipse.setAttribute("transform", "rotate("+(2*angle/majorX)+")");
        ellipse.setAttribute("fill", colors[angle % colors.length]);
        svg.appendChild(ellipse);
     } 
   } 
}

