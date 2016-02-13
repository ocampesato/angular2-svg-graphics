import {Component} from 'angular2/core';

@Component({
 selector: 'graphics',
 template: `<svg id="svg" width="800" height="500">
            </svg>
           `
})
export class LissajousTripleScale1Ellipses1FP1 {
   constructor() {
      this.graphics();
   } 

   graphics() {
     var svgns = "http://www.w3.org/2000/svg";
     var svg   = document.getElementById("svg");
     var colors1 = ["#ff0000", "#0000ff"];
     var colors2 = ["#0000ff", "#ffff00"];
     var colors3 = ["#ffffff", "#ff0000"];

     var fixedPointX = 700,  fixedPointY = 100;
     var basePointX  = 440,  basePointY  = 200;
     var currentX    = 0,    currentY    = 0;
     var offsetX     = 0,    offsetY     = 0;
     var majorX      = 30,   majorY      = 50;
     var Constant    = 0.25, angle       = 0;
     var A           = 200,  B           = 2;
     var C           = 100,  D           = 5;
     var deltaAngle  = 1,    maxAngle    = 721;
     var radius      = 0;
 
     for(angle=0; angle<maxAngle; angle+=deltaAngle) {
        offsetX  = A*Math.sin(B*angle*Math.PI/180);
        offsetY  = C*Math.cos(D*angle*Math.PI/180);
        currentX = basePointX+offsetX;
        currentY = basePointY-offsetY;
   
        var line1 = document.createElementNS(svgns, "line");
        line1.setAttribute("x1", fixedPointX);
        line1.setAttribute("y1", fixedPointY);
        line1.setAttribute("x2", currentX);
        line1.setAttribute("y2", currentY);
        line1.setAttribute("stroke", colors1[angle % colors2.length]);
        svg.appendChild(line1);
   
        var ellipse = document.createElementNS(svgns, "ellipse");
        ellipse.setAttribute("cx", currentX);
        ellipse.setAttribute("cy", currentY);
        ellipse.setAttribute("rx", majorX);
        ellipse.setAttribute("ry", majorY);
      //ellipse.setAttribute("transform", "rotate("+(2*angle/majorX)+")");
        ellipse.setAttribute("transform", "scale("+(angle/maxAngle)+")");
        ellipse.setAttribute("fill", colors1[angle % colors1.length]);
        svg.appendChild(ellipse);

        var ellipse2 = document.createElementNS(svgns, "ellipse");
        ellipse2.setAttribute("cx", currentX+majorX);
        ellipse2.setAttribute("cy", currentY);
        ellipse2.setAttribute("rx", majorX);
        ellipse2.setAttribute("ry", majorY);
      //ellipse2.setAttribute("transform", "rotate("+(2*angle/majorX)+")");
        ellipse.setAttribute("transform", "scale("+(angle/maxAngle)+")");
        ellipse2.setAttribute("fill", colors2[angle % colors2.length]);
        svg.appendChild(ellipse2);

        var ellipse3 = document.createElementNS(svgns, "ellipse");
        ellipse3.setAttribute("cx", currentX+majorX/2);
        ellipse3.setAttribute("cy", currentY-majorY/2);
        ellipse3.setAttribute("rx", majorX);
        ellipse3.setAttribute("ry", majorY);
      //ellipse3.setAttribute("transform", "rotate("+(2*angle/majorX)+")");
        ellipse.setAttribute("transform", "scale("+(angle/maxAngle)+")");
        ellipse3.setAttribute("fill", colors3[angle % colors3.length]);
        svg.appendChild(ellipse3);
     } 
   } 
}

