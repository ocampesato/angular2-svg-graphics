import {Component} from 'angular2/core';

@Component({
 selector: 'graphics',
 template: `<svg id="svg" width="800" height="500">
            </svg>
           `
})
export class CochleoidScale1Ellipses1FP1 {
   constructor() {
      this.graphics();
   } 

   graphics() {
     var svgns = "http://www.w3.org/2000/svg";
     var svg   = document.getElementById("svg");
     var colors = ["#ff0000", "#0000ff"];

   //var fixedPointX = 700,  fixedPointY = 100;
     var fixedPointX = 100,  fixedPointY = 500;
     var basePointX  = 440,  basePointY  = 350;
     var currentX    = 0,    currentY    = 0;
     var offsetX     = 0,    offsetY     = 0;
     var majorX      = 30,   majorY      = 50;
     var Constant    = 20000,angle       = 0;
     var deltaAngle  = 1,    maxAngle    = 721;
 
     for(angle=1; angle<maxAngle; angle+=deltaAngle) {
        radius = Constant*
                   Math.sin(angle*Math.PI/180)/angle;
 
        offsetX  = radius*Math.cos(angle*Math.PI/180);
        offsetY  = radius*Math.sin(angle*Math.PI/180);
        currentX = basePointX+offsetX;
        currentY = basePointY-offsetY;
   
        var line1 = document.createElementNS(svgns, "line");
        line1.setAttribute("x1", fixedPointX);
        line1.setAttribute("y1", fixedPointY);
        line1.setAttribute("x2", currentX);
        line1.setAttribute("y2", currentY);
        line1.setAttribute("stroke", colors[angle % colors.length]);
        svg.appendChild(line1);
   
        var ellipse = document.createElementNS(svgns, "ellipse");
        ellipse.setAttribute("cx", currentX);
        ellipse.setAttribute("cy", currentY);
        ellipse.setAttribute("rx", majorX);
        ellipse.setAttribute("ry", majorY);
      //ellipse.setAttribute("transform", "rotate("+(2*angle/majorX)+")");
        ellipse.setAttribute("transform", "scale("+(angle/maxAngle)+")");
        ellipse.setAttribute("fill", colors[angle % colors.length]);
        svg.appendChild(ellipse);
     } 
   } 
}
