import {Component} from 'angular2/core';

@Component({
 selector: 'graphics',
 template: `<svg id="svg" width="800" height="500">
            </svg>
           `
})
export class CochleoidDoubleEllipses1 {
   constructor() {
      this.graphics();
   } 

   graphics() {
     var svgns = "http://www.w3.org/2000/svg";
     var svg   = document.getElementById("svg");
     var colors  = ["#ff0000", "#0000ff"];
     var colors2 = ["#0000ff", "#ffff00"];

     var basePointX  = 240,  basePointY  = 350;
     var currentX    = 0,    currentY    = 0;
     var offsetX     = 0,    offsetY     = 0;
     var majorX      = 30,   majorY      = 50;
     var Constant    = 20000,angle       = 0;
     var deltaAngle  = 1,    maxAngle    = 721;
     var rectWidth   = 40,   rectHeight  = 20;
     var radius      = 0;
 
     for(angle=1; angle<maxAngle; angle+=deltaAngle) {
        radius = Constant*
                   Math.sin(angle*Math.PI/180)/angle;
 
        offsetX  = radius*Math.cos(angle*Math.PI/180);
        offsetY  = radius*Math.sin(angle*Math.PI/180);
        currentX = basePointX+offsetX;
        currentY = basePointY-offsetY;
   
        var ellipse = document.createElementNS(svgns, "ellipse");
        ellipse.setAttribute("cx", currentX);
        ellipse.setAttribute("cy", currentY);
        ellipse.setAttribute("rx", majorX);
        ellipse.setAttribute("ry", majorY);
        ellipse.setAttribute("fill", colors[angle % colors.length]);
        svg.appendChild(ellipse);

        var ellipse2 = document.createElementNS(svgns, "ellipse");
        ellipse2.setAttribute("cx", currentX+majorX);
        ellipse2.setAttribute("cy", currentY);
        ellipse2.setAttribute("rx", majorX);
        ellipse2.setAttribute("ry", majorY);
        ellipse2.setAttribute("fill", colors2[angle % colors2.length]);
        svg.appendChild(ellipse2);
     } 
   } 
}
