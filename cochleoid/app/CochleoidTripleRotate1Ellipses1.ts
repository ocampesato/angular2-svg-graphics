import {Component} from 'angular2/core';

@Component({
 selector: 'graphics',
 template: `<svg id="svg" width="800" height="500">
            </svg>
           `
})
export class CochleoidTripleRotate1Ellipses1 {
   constructor() {
      this.graphics();
   } 

   graphics() {
     var svgns = "http://www.w3.org/2000/svg";
     var svg   = document.getElementById("svg");
     var colors1 = ["#ff0000", "#0000ff"];
     var colors2 = ["#0000ff", "#ffff00"];
     var colors3 = ["#ffffff", "#ff0000"];

     var basePointX  = 440,  basePointY  = 250;
     var currentX    = 0,    currentY    = 0;
     var offsetX     = 0,    offsetY     = 0;
     var majorX      = 30,   majorY      = 50;
     var Constant    = 20000,angle       = 0;
     var deltaAngle  = 1,    maxAngle    = 721;
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
        ellipse.setAttribute("transform", "rotate("+(2*angle/majorX)+")");
        ellipse.setAttribute("fill", colors1[angle % colors1.length]);
        svg.appendChild(ellipse);

        var ellipse2 = document.createElementNS(svgns, "ellipse");
        ellipse2.setAttribute("cx", currentX+majorX);
        ellipse2.setAttribute("cy", currentY);
        ellipse2.setAttribute("rx", majorX);
        ellipse2.setAttribute("ry", majorY);
        ellipse2.setAttribute("transform", "rotate("+(2*angle/majorX)+")");
        ellipse2.setAttribute("fill", colors2[angle % colors2.length]);
        svg.appendChild(ellipse2);

        var ellipse3 = document.createElementNS(svgns, "ellipse");
        ellipse3.setAttribute("cx", currentX+majorX/2);
        ellipse3.setAttribute("cy", currentY-majorY/2);
        ellipse3.setAttribute("rx", majorX);
        ellipse3.setAttribute("ry", majorY);
        ellipse3.setAttribute("transform", "rotate("+(2*angle/majorX)+")");
        ellipse3.setAttribute("fill", colors3[angle % colors3.length]);
        svg.appendChild(ellipse3);
     } 
   } 
}

